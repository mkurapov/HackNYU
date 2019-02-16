import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  isSidebarVisible = false;

  constructor() { }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
    console.log(this.isSidebarVisible);
  }
}
