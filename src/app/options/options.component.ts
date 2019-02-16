import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
  }

  onCreate() {
    this.apiService.createEntry();
  }
}
