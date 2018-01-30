import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { DashboardMainService } from './dashboard.main.service';

@Component({
    selector: 'app-dashboard-main',
    templateUrl: './dashboard.main.component.html'
})
export class DashboardMainComponent implements OnInit {

    public currentGiftCardBalance = 0.0;

    // Constructor function
    // @param auth_service : authentication service
    // @param router : router service
    // @returns none
    constructor(private auth_service: AuthService, 
                private router: Router, 
                private service: DashboardMainService)
                {}

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        this.getGiftCardBalance()
        this.getTransByDateRange()
        
    }

    getGiftCardBalance(){
       
        this.service.getBalance({ barcode: 51000, business: 2 })
        .map(res => res.json())
        .subscribe(response => {
            if(response.error){
                console.log("There was an error getting the response")
            }else{
                console.log(response.data)
                this.currentGiftCardBalance = response.data;

            }
        });

    }

    getTransByDateRange(){
        this.service.giftCardsTransByDateRange(
                { start_date: '2017-12-03+21:00:59', 
                  end_date: '2018-12-07+21:00:59',
                  loc: 1
                })
        .map(res => res.json())
        .subscribe(response => {
            if(response.error){
                console.log("There was an error getting the response")
            }else{
                console.log(response)
                //this.currentGiftCardBalance = response.data;

            }
        });


    }



}