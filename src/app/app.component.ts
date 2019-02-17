import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HackNYU';

  constructor(private apiService:ApiService) {

  }

  ngOnInit() {
    this.apiService.logout();
  }
}
