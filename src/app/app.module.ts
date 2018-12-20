import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {Angular2FontawesomeModule} from 'angular2-fontawesome';
import { FileManagerComponent } from './component/file-manager/file-manager.component';
import {HttpClientModule} from '@angular/common/http';
import {Routes , RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';

const appRoutes: Routes = [
  { path: '**', component: FileManagerComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    FileManagerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    Angular2FontawesomeModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
