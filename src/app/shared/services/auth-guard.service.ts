import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../providers/auth.service';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authservice: AuthService, private toastr: ToastrService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (localStorage.getItem('userid')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      this.toastr.warning('vous n"etes pas conncte', 'veuillez connectez')
      return false;
    }
  }
}
