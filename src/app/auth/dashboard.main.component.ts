import { Component, OnInit } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'
import { DashboardMainService } from './dashboard.main.service';
import {IMyDpOptions} from 'mydatepicker';

@Component({
    selector: 'app-dashboard-main',
    templateUrl: './dashboard.main.component.html'
})
export class DashboardMainComponent implements OnInit {

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'yyyy-dd-mm',
    };
     today = new Date();
     lastDayOfMonth = new Date(this.today.getFullYear(), this.today.getMonth()+1, 0);
     
    public GiftCardData = []
    public dateRange: any = { beginDate: { year: this.today.getFullYear(), month: this.today.getMonth()+1, day: 1 } ,
                              endDate: { year: this.today.getFullYear(), month: this.today.getMonth()+1, day: this.lastDayOfMonth.getDate() }};

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
        console.log(JSON.parse(localStorage.getItem('userdata')))
        //this.getGiftCardBalance()
        //this.getTransByDateRange()
        console.log("month");
        console.log(this.lastDayOfMonth.getDate());

        let beginDate = this.dateRange['beginDate']['year']+'-'+this.dateRange['beginDate']['month']+'-'+this.dateRange['beginDate']['day']+'+00:00:01'
        let endDate = this.dateRange['endDate']['year']+'-'+this.dateRange['endDate']['month']+'-'+this.dateRange['endDate']['day']+'+23:59:59'

        console.log(beginDate +' ooo '+endDate)

        this.getTransByDateRange(beginDate,endDate);
    }


    getDate(){
        console.log(this.dateRange)
        
        let beginDate = this.dateRange['beginDate']['year']+'-'+this.dateRange['beginDate']['month']+'-'+this.dateRange['beginDate']['day']+'+00:00:01'
        let endDate = this.dateRange['endDate']['year']+'-'+this.dateRange['endDate']['month']+'-'+this.dateRange['endDate']['day']+'+23:59:59'

        console.log(beginDate +' ooo '+endDate)

        this.getTransByDateRange(beginDate,endDate);
        //this.getTransByDateRange('2017-12-03+21:00:59','2018-12-07+21:00:59');
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
    valueSold = 0
valueRedeemed = 0
trans_count = 0
    getTransByDateRange(startDate, endDate){

        //var userdata = JSON.parse(req.cookies['userdata']);
        this.service.giftCardsTransByDateRange(
                { start_date: startDate, 
                  end_date: endDate,
                  loc: 0,
                  bussines : JSON.parse(localStorage.getItem('userdata')).business_id
                })
        .map(res => res.json())
        .subscribe(response => {
            if(response.error){
                console.log("There was an error getting the response")
            }else{
                this.GiftCardData = response.data;
                for (var i = 0; i < this.GiftCardData.length; i++) { 
                    
                    if(this.GiftCardData[i].approved_quantity<0){
                        this.valueRedeemed += this.GiftCardData[i].approved_quantity;
                    }else{
                        this.valueSold += this.GiftCardData[i].approved_quantity; 
                    }
                    
                }
                this.trans_count = this.GiftCardData.length
            }
        });


    }



}