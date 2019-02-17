import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { switchMap, debounceTime, flatMap } from 'rxjs/operators';


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

  private chats: Chat[] = [];

  searchTerm: string;


  visibleEntry:Entry;
  visibleChat:Chat;

  constructor(private http:HttpClient) { 
  }

  logout() {
    this.userId = '';
    this.entries = [];
    this.chats = [];
    this.visibleChat = this.visibleEntry = {};
    this.update$ = new Subject<any>();
  }

  subscribeUpdate() {
    this.update$.pipe(debounceTime(1000)).subscribe(val => {
      return this.updateEntry(this.visibleEntry).subscribe((val) => {
        this.visibleEntry.classifications = val['classifications'];
        this.refreshUser()
          .pipe(flatMap(() => this.refreshMatches()))
          .subscribe(() => this.getChats());
      });
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

  refreshMatches() {
    return this.http.post(this.url + `/detectMatches`, {});
  }

  refreshUser() {
    return this.http.post(this.url + `/nlpUser?userId=${this.userId}`, {});
  }



  onEntryEdit() {
    this.update$.next();
  }

  get filteredEntries() {
    if (this.searchTerm && this.searchTerm.length > 0) {
      return this.entries.filter(en => {
        return en.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || en.body.includes(this.searchTerm.toLowerCase())
      });
    } 

    return this.entries;
  }

  get filteredChats() {
    // if (this.searchTerm && this.searchTerm.length > 0) {
    //   return this.chats.filter(chat => {
    //     return chat.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || chat.body.includes(this.searchTerm.toLowerCase())
    //   });
    // } 

    return this.chats;
  }

  onSelectEntry(id) {
    this.visibleEntry = this.entries.find(e => e.id == id);
  }

  onSelectChat(id) {
    this.visibleChat = this.chats.find(e => e.id == id);
  }

  getEntries() {
    return this.http.get(this.url + `/entry?userId=${this.userId}`).subscribe(val => {
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

      this.subscribeUpdate();
    });
  }

  getChats() {
    
    return this.http.get(this.url + `/entry?userId=${this.userId}`).subscribe(val => {
      console.log('getting chats:', val)  
      this.chats = val['chats'].filter(v => v).map((c, i) => {
        return {
          id: i,
          otherUser: c['otherUser'],
          name: `Anonymous ${i}`,
          messages:[],
          tags: c['tags']
        }
      });

      console.log('here:', this.chats);

      this.chats.sort((a, b) => b.id - a.id);

      if (this.chats.length > 0) {
        this.visibleChat = this.chats[0];
      }      
    });
  }

}
