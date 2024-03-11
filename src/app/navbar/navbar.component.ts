import {Component, OnInit} from '@angular/core';
import {AppStateService} from "../services/app-state.service";
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  currentAction: any;
  title = 'Hello_Word_Project';

  actions: Array<any> = [
    {title: "Login", route: "/login", icon: "login"},
    {title: "Home", route: "/home", icon: "house"},
    {title: "Books", route: "/admin/books", icon: "search"},
    {title: "Arab Books", route: "/admin/arabBook", icon: "safe"},
    {title: "New Book", route: "/admin/newBook", icon: "new"}
  ];

  constructor(public appState: AppStateService,public subjectService:SubjectService) {
  }

  setCurrentAction(action: any) {
    this.currentAction = action;
  }

}
