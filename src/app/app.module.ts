import { BrowserModule } from '@angular/platform-browser';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'
import { HttpModule } from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './auth/dashboard.component'
import { DashboardMainComponent } from './auth/dashboard.main.component'
import { NavBarComponent } from './menu/navbar.component'
import { SideBarComponent } from './menu/sidebar.component'
import { LoginComponent } from './auth/login.component'
import { AuthService } from './auth/auth.service'
import { AlwaysAuthGuard } from './auth/alwaysauthguard.service'
import { SetupService } from './auth/setup.service';
import { DashboardMainService } from './auth/dashboard.main.service';
import { DetailComponent } from './auth/barcode_detail.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
    { 
        path: '', component: DashboardComponent,
        canActivate: [AlwaysAuthGuard],
        children : [
            {
                path: '',
                component: DashboardMainComponent
            },
            {
                path: 'detail/:barcode',
                component: DetailComponent
            }
        ]
    }
]

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        DashboardMainComponent,
        LoginComponent,
        NavBarComponent,
        SideBarComponent,
        DetailComponent
    ],
    imports: [
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        FormsModule,
        MyDateRangePickerModule 
    ],
    providers: [
        SetupService,
        AuthService,
        DashboardMainService,
        CookieService,
        AlwaysAuthGuard
        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
export class MyTestAppModule {}