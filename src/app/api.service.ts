import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Entry, Chat } from './models/general';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string = 'http://justwrite.appspot.com/';

  private isLoggedIn: boolean = true;
  private entries: Entry[];
  private chats: Chat[];

  private visibleEntry:Entry;
  private visibleChat:Chat;

  constructor(private http:HttpClient) { 
    this.entries = this.getEntries();
    this.chats = this.getChats();
    this.visibleChat = this.chats[0];
    this.visibleEntry = this.entries[0];
  }

  createEntry() {
    let newEntry = {
      id:10,
      date: new Date()
    }
    return of(newEntry).subscribe(val => { 
      this.entries.unshift(val);
      this.visibleEntry = val;
    });
  }

  onEntryEdit() {
    console.log(this.visibleEntry);
  }

  onSelectEntry(id) {
    this.visibleEntry = this.entries.find(e => e.id == id);
  }

  onSelectChat(id) {
    this.visibleChat = this.chats.find(e => e.id == id);
  }


  editEntry(entry): Observable<any> {
    return this.http.put(this.url + '/entry', entry);
  }

  getEntries(): Entry[] {
    return [{
      id:1,
      date: new Date(),
      title: "Talk to me",
      body: "hello"
    },
    {
      id:2,
      date: new Date(),
      title: "Another one",
      body: "hello"
    },
    {
      id:3,
      date: new Date(),
      title: "Another one",
      body: "hello"
    },
    {
      id:4,
      date: new Date(),
      title: "Another one",
      body: "hello"
    },
    {
      id:5,
      date: new Date(),
      title: "Another one",
      body: "hello"
    }];
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
