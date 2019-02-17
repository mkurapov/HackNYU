import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password: string;
  constructor(private apiService: ApiService, private router: Router) { }



  ngOnInit() {
    this.apiService.logout();
  }

  get isPasswordSet() {
    return this.password && this.password.length > 0;
  }

  login() {
    if (this.isPasswordSet) {
      this.router.navigate(['/write']);
    }
  }
}