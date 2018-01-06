import { BrowserModule } from '@angular/platform-browser';
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

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
    { 
        path: '', component: DashboardComponent,
        canActivate: [AlwaysAuthGuard],
        children : [
            {
                path: '',
                component: DashboardMainComponent
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
        SideBarComponent
    ],
    imports: [
        HttpModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        ),
        BrowserModule,
        FormsModule
    ],
    providers: [
        AuthService,
        CookieService,
        AlwaysAuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
