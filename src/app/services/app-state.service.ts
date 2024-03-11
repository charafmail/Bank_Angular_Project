import { Injectable } from '@angular/core';
import {Book} from "../model/book.model";
import {state} from "@angular/animations";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})²
export class AppStateService {
    authSate: any={
      // les roles sont récupérés depuis le token envoyé par le backend
      roles: ['ADMIN']
    }


  constructor() {
  }

  public _bookState: any = {
    books: [],
    name: "",
    limit: 2,
    currentPage: 1,
    totalPages: 0,
    totalElements: 0,
    status:""
  }

  private _isAuthenticated: boolean = false;

  private _bookStateSubject:any = new BehaviorSubject(this._bookState);

//Setter pour qur l'objet soit immutable
  setBookState(state: any) {
    this._bookState = {...this._bookState,...state}
  }

  get bookState(): any {
    return this._bookState;
  }


  get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }
}
