import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {AppStateService} from "../services/app-state.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class AuthenticationGuard{
  constructor(private appState: AppStateService,private router :Router) {
  }
  canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) {

    if(this.appState.isAuthenticated==true){
      return true;
    }else{
      this.router.navigateByUrl("/login");
      return false;
    }


  };

}


/*export const authenticationGuard: CanActivateFn = (route, state) => {





  return true;
};
*/
