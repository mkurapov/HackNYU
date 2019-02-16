import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from './models/general';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url:string = 'http://justwrite.appspot.com/';

  constructor(private http:HttpClient) { 
  }


  getPosts(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
      })
     };
    return this.http.post(this.url + 'nlp', {
      text:'dogs'
    }, options);
  }

  getEntries(): Entry[] {
    return [{
      id:1,
      date: new Date(),
      title: "Talk to me",
      body: "hello"
    },
    {
      id:2,
      date: new Date(),
      title: "Another one",
      body: "hello"
    }];
  }
}
