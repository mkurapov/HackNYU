import { Injectable } from '@angular/core';
import { Entry, Chat } from './models/general';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  isSidebarVisible = true;
  optionsTitle = '';

  constructor() { 
  }

  onToggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  

}
