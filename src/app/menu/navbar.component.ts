import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'

@Component({
    selector : 'camaleon-navbar',
    templateUrl : './navbar.component.html'
})
export class NavBarComponent {

    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}

    // Log out funtion
    // Will logout and clean the cookie on the serve side of the app
    // @params none
    // @returns none
    logout = () => {
        this.auth_service.logout()
            .map( res => res.json() )
            .subscribe( ( response ) => {
                this.router.navigateByUrl( '/login' )
                console.log( "Log out succesful" )
            })
    }
}