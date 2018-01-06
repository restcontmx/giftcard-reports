import { Injectable } from '@angular/core'
import { CanActivate } from "@angular/router"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    // constructor function
    // @param auth_service: Authentication service
    // @param router: router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}
    
    // can activate
    // Verification of the login
    // @params none
    // @returns boolean
    canActivate() {
        if( this.auth_service.viewVerification() ) {
            return true
        } else {
            this.router.navigate([ '/login' ]);
            return false
        }
    }
}