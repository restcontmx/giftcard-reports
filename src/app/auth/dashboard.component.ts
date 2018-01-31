import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { DashboardMainService } from './dashboard.main.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [
        './dashboard.component.css'
    ]
})
export class DashboardComponent implements OnInit {

    // Constructor function
    // @param router : router service
    // @returns none
    constructor(private router: Router,
        private auth_service: AuthService
    ) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        //console.log( "Is in dasboard" )
    }

    Logout() {
        this.auth_service.logout()

    }

}