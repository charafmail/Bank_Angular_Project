import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AppStateService} from "../services/app-state.service";

@Injectable({providedIn: 'root'})
export class AuthorizationGuard{

constructor(private appState :AppStateService) {
}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.appState.authSate.roles.includes(route.data['requiredRoles'])) {
      return true
    } else {
      return false;
    }
  }
}
