import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { SetupService } from './setup.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DashboardMainService {
    constructor(private http_service: Http,
            private cookie_service:CookieService,
            private setup_service:SetupService) { }


    getBalance(data): Observable<Response> {
        let formated_request = `${this.setup_service.getAPIUri()}reports/balance?barcode=${data.barcode}&business=${data.business}`
        //console.log(formated_request)
        return this.http_service.get(formated_request)
     }

     giftCardsTransByDateRange(data): Observable<Response> {
        let formated_request = `${this.setup_service.getAPIUri()}reports/transbydaterange?start_date=${data.start_date}&end_date=${data.end_date}&loc=${data.loc}&bussines=${data.bussines}`
        //console.log(formated_request)
        return this.http_service.get(formated_request)
     }
     giftCardsTransByBarcode(data): Observable<Response> {
        let formated_request = `${this.setup_service.getAPIUri()}reports/giftcardstransbybarcode?barcode=${data.barcode}&business=${data.business}`
        console.log(formated_request)
        return this.http_service.get(formated_request)
     }
}