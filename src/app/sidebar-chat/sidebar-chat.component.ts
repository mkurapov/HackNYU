import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../models/general';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sidebar-chat',
  templateUrl: './sidebar-chat.component.html',
  styleUrls: ['./sidebar-chat.component.scss']
})
export class SidebarChatComponent implements OnInit {

  @Input() chat: Chat;
  
  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
  }

}
