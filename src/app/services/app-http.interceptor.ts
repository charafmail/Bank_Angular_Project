import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {AppStateService} from "./app-state.service";
import {SubjectService} from "./subject.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private appStateService:AppStateService,private subjectServive:SubjectService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.subjectServive.publishBook("LOADING");

/* this.appStateService.setBookState({
   status: "LOADING"
 })*/

 console .log(this.appStateService._bookState);

 // next.handle : laisser la reponse partir
 //pipe : ecoute la reponse
 return next.handle(request).pipe(
   finalize(() => {
     this.subjectServive.publishBook("LOADED");
     /* this.appStateService.setBookState({
           status: "LOADED"
         })*/
     console .log(this.appStateService._bookState);
   })
 );
}
}
