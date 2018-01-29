import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { DashboardMainService } from './dashboard.main.service';

@Component({
    selector: 'app-dashboard-main',
    templateUrl: './dashboard.main.component.html'
})
export class DashboardMainComponent implements OnInit {

    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    constructor(private auth_service: AuthService, private router: Router, private service: DashboardMainService) { }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        console.log('gaylord')
        this.service.getBalance({ barcode: 51000, business: 2 })
            .map(res => res.json()
            .subscribe(response => {
                if(response.error){
                    console.log("There was an error getting the response")
                }else{
                    console.log(response.data)

                }
            }));
    }




}