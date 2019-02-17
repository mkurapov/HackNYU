import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = '/write'; 

  constructor(private uiService:UIService, private apiService: ApiService, 
    private route: ActivatedRoute, private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
        console.log(this.url);
        this.uiService.isMessengerVisible = this.url === '/connect';
      }
    })
   }

  ngOnInit() {
    this.apiService.getEntries();
    this.apiService.getChats(); 
  }
}
