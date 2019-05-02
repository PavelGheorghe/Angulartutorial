import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service'

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  textfromservice; 
  title1='child component ';
  d;
  constructor(private date:MyserviceService) { }
  newcomponent='text from new component';
  ngOnInit() {
    this.d = this.date.ShowTodayDate();
    this.textfromservice = this.date.sometext;
  }

}
