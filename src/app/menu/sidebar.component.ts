import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'

@Component({
    selector : 'camaleon-sidebar',
    templateUrl : './sidebar.component.html'
})
export class SideBarComponent {

    // Constructor function
    // @param auth_service : authentication service
    // @param route : routing service
    constructor( private auth_service:AuthService, private router:Router ) {}
}