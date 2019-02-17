import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  tags = ['complaining about parents', 'walking dogs'];
  messages= [];
  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
    // this.uiService.optionsTitle = this.apiService.visibleEntry.date.toDateString();
  }

}
