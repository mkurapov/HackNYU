import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
    
  }
}
