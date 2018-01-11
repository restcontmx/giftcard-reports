import { Injectable } from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SetupService {
    
    private DEVELOPMENT_MODE : boolean = true
    private dev_api_uri : string = "http://localhost:4123/api/"
    private prod_api_uri : string = "/api/"

    // Constructor function
    // @returns none
    constructor() {}

    getAPIUri() : String {
        return this.DEVELOPMENT_MODE ? this.dev_api_uri : this.prod_api_uri
    }
}