import { routes } from './../../app.routes';
import { SharedService } from './../../services/shared.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    public shared : SharedService;

    constructor(private router: Router){
        this.shared = SharedService.getInstence();
    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean | Observable<boolean> {
        if(this.shared.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
    
}