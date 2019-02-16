import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Entry, Chat } from './models/general';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string = 'http://justwrite.appspot.com';

  private isLoggedIn: boolean = false;
  private entries: Entry[] = [];
  private chats: Chat[];

  private visibleEntry:Entry;
  private visibleChat:Chat;

  constructor(private http:HttpClient) { 
    this.getEntries();
    this.chats = this.getChats();
  }

  login() {
    return of(true);
  }

  createEntry() {
    let newEntry = {
      id:10,
      date: new Date(),
      title:'',
      body:''
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

  getEntries() {
    let userId = 'mikenike';
    return this.http.get(this.url + `/entry?userId=${userId}`).subscribe(val => {
      this.entries = val['entries'].filter(v => v).map((e, i) => {
        return {
          id: i,
          ...e
        }
      });
      if (this.entries.length > 0) {
        this.visibleEntry = this.entries[0];
      }
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

  flattenObject(ob) {
    var toReturn = {};
    
    for (var i in ob) {
      if (!ob.hasOwnProperty(i)) continue;
      
      if ((typeof ob[i]) == 'object') {
        var flatObject = this.flattenObject(ob[i]);
        for (var x in flatObject) {
          if (!flatObject.hasOwnProperty(x)) continue;
          
          toReturn[i + '.' + x] = flatObject[x];
        }
      } else {
        toReturn[i] = ob[i];
      }
    }
    return toReturn;
  };
}
