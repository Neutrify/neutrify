import { MenuController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
    backClicked = false;

    constructor(
        private router: Router,
        public authService: AuthService,
        ) { }
    async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const url: string = state.url;

        const isAuthenticated = await this.authService.isAuthenticated();
        if (url === '' || url.startsWith('/home') || url.startsWith('/auth')) {
            if (isAuthenticated) {
                this.router.navigateByUrl('/app');
                return false;
            } else {
                return true;
            }
        } else if (url.startsWith('/app')) {
            if (isAuthenticated) {
                return true;
            } else {
                this.router.navigateByUrl('/auth/sign-in');
                return false;
            }
        }
    }
}
