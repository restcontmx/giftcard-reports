
import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
    selector : 'app-login',
    templateUrl : './login.component.html',
    styleUrls : [ 
        './login.component.css'
    ]
})
// Login component is the main login view
export class LoginComponent {
    
    // Constructor function
    // @param authservice: authentication service
    // @param router : router service
    // @returns none
    constructor( private authservice:AuthService, private router:Router ) {}

    // Login function
    // This uses the authentication service to validate the user and password
    // @params none
    // @returns void
    login = (log: NgForm ) => {
        if( log.valid ) {
            this.authservice.login( log.value.email, log.value.password )
                .map( res => res.json() )
                .subscribe( ( response ) => {
                    if( !response.error ) {
                        console.log( "Valid credentials" );
                        this.router.navigateByUrl( '/' );
                        localStorage.setItem( 'userdata', JSON.stringify( response.user_data ) )
                    } else {
                        console.log( "Not valid login", response.message )
                        alert( response.message )
                    }
                });
        }
    }
}