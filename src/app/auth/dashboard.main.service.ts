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
        console.log('gay service')
        let formated_request = `${this.setup_service.getAPIUri()}giftcards/balance?barcode=${data.barcode}&business=${data.business}`
        console.log(formated_request)
        return this.http_service.get(formated_request)
     }
}