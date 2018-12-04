import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { ApiService } from './api.service';
import { HelperService } from './helper.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'image/:imageId', component: ImageDetailComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  providers: [ApiService, HelperService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
