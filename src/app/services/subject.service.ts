import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {AppStateService} from "./app-state.service";

@Injectable({
  providedIn: 'root'
})

// subject: type d'observable (qui agit à la fois comme un observateur et un observable) fournis par RxJS (bibliothèque de programation réactive dans Angular)
// si un evenement est emis avec subject.next(), il est diffuse a tous les observateur abonnes
export class SubjectService {

  // isLoading$ est un subject (un petit brocker util pour appliquer le model pubsub publish subscribe), generalement les subject se termine par un $
  public status$= new Subject<String>();
  constructor() { }

  publishBook(status:any){
    this.status$.next(status);
}


}
