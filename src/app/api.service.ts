import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime } from 'rxjs/operators';


import { Entry, Chat } from './models/general';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string = 'http://justwrite.appspot.com';
  userId: string = 'mikenike';


  private update$ = new Subject<any>();

  private isLoggedIn: boolean = false;
  private entries: Entry[] = [];

  private chats: Chat[];

  searchTerm: string;


  visibleEntry:Entry;
  visibleChat:Chat;

  constructor(private http:HttpClient) { 
  }

  logout() {
    this.userId = '';
    this.entries = [];
    this.chats = [];
    this.visibleChat = this.visibleEntry = null;
  }

  subscribeUpdate() {
    this.update$.pipe(debounceTime(1000)).subscribe(val => {
      return this.updateEntry(this.visibleEntry).subscribe((val) => {
        this.visibleEntry.classifications = val['classifications'];
      });
      // 
    });
  }

  isValidUser() {
    return true;
  }

  updateEntry(entry) {
    return this.http.put(this.url + `/entry?entryId=${entry.id}&userId=${this.userId}&entryTitle=${entry.title}&entryBody=${entry.body}`, {});
  }

  login() {
    return of(true);
  }

  createEntry() {
    return this.http.post(this.url + `/entry?userId=${this.userId}`, {}).subscribe(val => { 
      console.log(val);
      val['title']='';
      val['body']='';
      this.entries.unshift(val);
      this.visibleEntry = val;
    });
  }

  onEntryEdit() {
    console.log(this.visibleEntry)
    this.update$.next();
    // console.log(this.visibleEntry);
    

    // put.subscribe(val => {
    //   this.visibleEntry.classifications  = val['classifications'];
    // });
    // obs.subscribe(val => { 
     
    // });
  }

  get filteredEntries() {
    console.log(this.searchTerm);
    if (this.searchTerm && this.searchTerm.length > 0) {
      return this.entries.filter(en => {
        return en.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || en.body.includes(this.searchTerm.toLowerCase())
      });
    } 

    return this.entries;
  }

  onSelectEntry(id) {
    this.visibleEntry = this.entries.find(e => e.id == id);
  }

  onSelectChat(id) {
    this.visibleChat = this.chats.find(e => e.id == id);
  }

  getEntries() {
    return this.http.get(this.url + `/entry?userId=${this.userId}`).subscribe(val => {
      console.log(val);
      this.entries = val['entries'].filter(v => v).map((e, i) => {
        return {
          id: i,
          ...e
        }
      });

      this.entries.sort((a, b) => b.id - a.id);

      if (this.entries.length > 0) {
        this.visibleEntry = this.entries[0];
      }
      console.log(this.entries);

      this.subscribeUpdate();
    });
  }

  getChats() {
    this.chats.push({
      name:'Anonymous Lemur',
      id:0,
      messages:[{
        body:'Hello'
      }
      ]
    });

    this.visibleChat = this.chats[0];


    // return this.http.get(this.url + `/chat?userId=${this.userId}`).subscribe(val => {
    //   console.log(val);
    //   this.chats = val['chats'].filter(v => v).map((c, i) => {
    //     return {
    //       id: i,
    //       ...c
    //     }
    //   });

    //   this.chats.sort((a, b) => b.id - a.id);

    //   if (this.chats.length > 0) {
    //     this.visibleChat = this.chats[0];
    //   }
    //   console.log(this.chats);
      
    // });
  }

}
