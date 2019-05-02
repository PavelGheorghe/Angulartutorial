import { Component } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

import {MyserviceService} from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular tutorialSpoint';
  months = ['January','February', 'March','April','May', 'March','April','May', 'March','April','May',]
  isavailable = true;
  httpdata;
  todaydate;  
  constructor(private date:MyserviceService ,private http:HttpClient){

  }
    ngOnInit(){
      this.todaydate = this.date.ShowTodayDate();
      this.title = this.date.sometext;
      this.date.sometext='valerica';

      this.http.get("http://jsonplaceholder.typicode.com/users")
      .subscribe((data)=>this.copydata(data));
    }

    copydata(data){ this.httpdata=data; }
  
}
