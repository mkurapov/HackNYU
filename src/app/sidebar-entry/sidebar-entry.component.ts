import { Component, OnInit, Input } from '@angular/core';
import { Entry } from '../models/general';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidebar-entry',
  templateUrl: './sidebar-entry.component.html',
  styleUrls: ['./sidebar-entry.component.scss']
})
export class SidebarEntryComponent implements OnInit {
  @Input() entry:Entry;
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

}
