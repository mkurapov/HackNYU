import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

}
