import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MyserviceService} from './myservice.service';
import { NewCompComponent } from './new-comp/new-comp.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe} from './sqrt';
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    SqrtPipe,
    AppComponent,
    NewCompComponent,
    ChangeTextDirective,
    HeroFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot([{
         path: 'new-component',
         component: NewCompComponent
    }]),
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
