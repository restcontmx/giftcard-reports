import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router,ActivatedRoute } from '@angular/router'
import { DashboardMainService } from './dashboard.main.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './barcode_detail.component.html',
    styleUrls: [
        './barcode_detail.component.css'
    ]
})
export class DetailComponent implements OnInit {

    constructor(private router: Router,
        private auth_service: AuthService,
        private service: DashboardMainService,
        private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['barcode'])

    }

    // Init function
    // This will initialize the consturctor and validates login
    // @params none
    // @returns void
    ngOnInit(): void {
        //console.log( "Is in dasboard" )
        this.getGiftCardBalance()

    }
    giftCardData = []
valueSold = 0
valueRedeemed = 0
    getGiftCardBalance() {

        this.service.giftCardsTransByBarcode(
            {
                barcode: this.route.snapshot.params['barcode'],
                business: JSON.parse(localStorage.getItem('userdata')).business_id
            }
        )
            .map(res => res.json())
            .subscribe(response => {
                if (response.error) {
                    console.log("There was an error getting the response")
                } else {
                    console.log(response.data)
                    this.giftCardData = response.data;
                    

                }
            });

    }
}

