import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    selector : 'app-dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : [
        './dashboard.component.css'
    ]
})
export class DashboardComponent implements OnInit {

    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    constructor( private auth_service:AuthService, private router:Router ) {}
    
    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        console.log( "Is in dasboard" )
    }

}