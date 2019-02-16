import { Injectable } from '@angular/core';
import { Entry } from './models/general';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  isSidebarVisible = true;

  entries: Entry[] = [{
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
  }];

  private visibleEntry:Entry;

  constructor() { 
    this.visibleEntry = this.entries[0];
  }

  setEntries(entries) {
    this.entries = entries;
  }

  onEntryEdit() {
    console.log(this.visibleEntry);
  }

  onSelectEntry(id) {
    this.visibleEntry = this.entries.find(e => e.id == id);
  }

  onToggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
