import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MyserviceService} from './myservice.service'
import { NewCompComponent } from './new-comp/new-comp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe} from './sqrt';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCompComponent,
    ChangeTextDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([{
         path:'new-component',
         component:NewCompComponent
    }]),
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
