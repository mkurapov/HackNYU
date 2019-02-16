import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.scss']
})
export class WriteComponent implements OnInit {

  body = '';
  title = '';


  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

}
