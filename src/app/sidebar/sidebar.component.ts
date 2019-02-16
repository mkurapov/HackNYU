import { Component, OnInit, HostBinding } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  url: string = '/write';

  constructor(private uiService:UIService, private route: ActivatedRoute, private router: Router) {
    router.events.subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
      }
    })
   }

  // showing = 'entries';

  ngOnInit() {
    console.log(this.route);
  }

}
