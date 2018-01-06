import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
    selector : 'app-dashboard-main',
    templateUrl : './dashboard.main.component.html'
})
export class DashboardMainComponent implements OnInit {

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
        console.log( "Is in main dasboard" )
    }

}