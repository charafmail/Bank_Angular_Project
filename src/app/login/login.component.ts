import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(private formBuilder:FormBuilder ,private router:Router,private appState: AppStateService) {
  }


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }



  login() {
    //normalement on fait un Post au bakch end, et si le mot de pass et le user sont correct , il nous retourne un token
    if(this.loginForm.value.username=="charaf" && this.loginForm.value.password=="1"){
       console.log("ys")
      this.appState.isAuthenticated= true;
       //On doit aussi récupérer les roles depuis le token(envoyé par le backend) et les saisir dans this.appState.authSate.roles

      this.router.navigateByUrl("/admin");
    }

    else{
      alert("UserName / Password Incorrect")
    }

  }


}
