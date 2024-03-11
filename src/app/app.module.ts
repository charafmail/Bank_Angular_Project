import {ChangeDetectorRef, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { ArabBookComponent } from './arab-books/arab-book.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { NewBookComponent } from './new-book/new-book.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditBookComponent } from './edit-book/edit-book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppErrorsComponent } from './app-errors/app-errors.component';
import {AppHttpInterceptor} from "./services/app-http.interceptor";
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    ArabBookComponent,
    NewBookComponent,
    EditBookComponent,
    DashboardComponent,
    NavbarComponent,
    AppErrorsComponent,
    LoginComponent,
    AdminTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],

  //declarer l intercepteur
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
