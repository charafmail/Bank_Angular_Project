import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BooksComponent} from "./books/books.component";
import {ArabBookComponent} from "./arab-books/arab-book.component";
import {NewBookComponent} from "./new-book/new-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path : "home", component : HomeComponent,canActivate:[AuthenticationGuard]},
  {path : "admin", component : AdminTemplateComponent,canActivate:[AuthenticationGuard], children :[
      {path : "books", component : BooksComponent, canActivate:[AuthorizationGuard],data:{requiredRoles:'ADMIN'}},
      {path : "arabBook", component : ArabBookComponent},
      {path : "newBook", component :NewBookComponent},
      {path : "editBook/:id", component :EditBookComponent},
    ]},

  {path : "", redirectTo :"login", pathMatch : 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
