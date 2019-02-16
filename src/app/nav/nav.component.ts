import { Component, OnInit } from '@angular/core';
import { UIService } from '../ui.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private uiService: UIService) { }

  ngOnInit() {
  }

}
