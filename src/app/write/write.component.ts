import { Component, OnInit, Input } from '@angular/core';
import { UIService } from '../ui.service';
import { Entry } from '../models/general';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
    
  }

}
