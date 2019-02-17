import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
    
  }

}
