import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  sometext='gheorghe';
  constructor() { }
  ShowTodayDate(){
    let nDate = new Date();
    return nDate;
  }
}
