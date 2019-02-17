import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';


import { Entry, Chat } from './models/general';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string = 'http://justwrite.appspot.com';
  private userId: string = 'mikenike';


  private update$ = new Subject<any>();

  private isLoggedIn: boolean = false;
  private entries: Entry[] = [];
  private chats: Chat[];



  visibleEntry:Entry;
  visibleChat:Chat;

  constructor(private http:HttpClient) { 
    this.getEntries();
    this.chats = this.getChats();
  }

  login() {
    return of(true);
  }

  createEntry() {
    return this.http.post(this.url + `/entry?userId=${this.userId}`, {}).subscribe(val => { 
      console.log(val);
      this.entries.unshift(val);
      this.visibleEntry = val;
    });
  }

  onEntryEdit() {
    // console.log(this.visibleEntry);
    const put = this.http.put(this.url + `/entry?entryId=${this.visibleEntry.id}&userId=${this.userId}&entryTitle=${this.visibleEntry.title}&entryBody=${this.visibleEntry.body}`, {});
    this.update$.pipe(debounceTime(1000)).pipe(() => put).subscribe(val => {
      console.log(val);
      // this.entries.unshift(val);
      // this.visibleEntry = val;
    });

    // put.subscribe(val => {
    //   this.visibleEntry.classifications  = val['classifications'];
    // });
    // obs.subscribe(val => { 
     
    // });
  }

  onSelectEntry(id) {
    this.visibleEntry = this.entries.find(e => e.id == id);
  }

  onSelectChat(id) {
    this.visibleChat = this.chats.find(e => e.id == id);
  }

  getEntries() {
    let userId = 'mikenike';
    return this.http.get(this.url + `/entry?userId=${userId}`).subscribe(val => {
      console.log(val);
      this.entries = val['entries'].filter(v => v).map((e, i) => {
        return {
          id: i,
          ...e
        }
      });
      if (this.entries.length > 0) {
        this.visibleEntry = this.entries[0];
      }
      console.log(this.entries);
    });
  }

  getChats(): Chat[] {
    return [{
      id:1,
      name:"Dogs"
    },
    {
      id:2,
      name:"Cats"
    },
    {
      id:3,
    },
    {
      id:4,
    },
    {
      id:5,
    }];
  }

}
