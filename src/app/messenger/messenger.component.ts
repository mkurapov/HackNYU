import { Component, OnInit, HostListener } from '@angular/core';
import { UIService } from '../ui.service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {

  newMessage = '';
  @HostListener('document:keydown.enter', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(this.newMessage);

    if (this.newMessage.trim()) {
      const nm = {
        body: this.newMessage
      };
      this.apiService.visibleChat.messages.push(nm);
    } 
    this.newMessage = '';

 

    // const objDiv = document.querySelector('.connect');
    // console.log(objDiv.scrollHeight);
    // // objDiv.scrollTop = objDiv.scrollHeight
    // // objDiv.scrollTo(0, objDiv.scrollHeight);

    // objDiv.scrollTo({
    //   top: 100,
    //   behavior: 'smooth'
    // });
 
  }

  constructor(private uiService: UIService, private apiService: ApiService) { }

  ngOnInit() {
  }

}
