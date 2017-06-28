import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  user: Observable<firebase.User>;
  constructor(private auth: AngularFireAuth, private router: Router) {
    this.user = this.auth.authState;
  }

  canActivate(): Observable<boolean> {
    return this.checkLogin();
  }

  canActivateChild(): Observable<boolean> {
    return this.canActivate();
  }

  checkLogin(): Observable<boolean> {
    return this.user.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    })
  }

}
