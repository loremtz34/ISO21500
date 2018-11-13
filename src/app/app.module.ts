import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModalModule } from 'ngx-bootstrap';
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,

    }, {
        path: 'integracion',
        loadChildren: './integracion/integracion-routing.module#IntegracionRoutingModule'
    },
    {
        path: 'recursos',
        loadChildren: './recursos/recursos-routing.module#RecursosRoutingModule'
    },
    {
        path: 'adquisiciones',
        loadChildren: './adquisiciones/adquisicion-routing.module#AdquisicionRoutingModule'
    }
];
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
