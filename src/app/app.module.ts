import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActaConstitucionComponent } from './integracion/acta-constitucion/acta-constitucion.component';
import { HomeComponent } from './home/home.component';
import { PlanificacionProyectoComponent } from './integracion/planificacion-proyecto/planificacion-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GestionConfiguracionUnoComponent } from './integracion/gestion-configuracion-uno/gestion-configuracion-uno.component';
import { GestionConfiguracionDosComponent } from './integracion/gestion-configuracion-dos/gestion-configuracion-dos.component';
const appRoutes = [
    {
        path: '',
        component: HomeComponent,

    }, {
        path: 'integracion',
        children: [
            {
                path: '',
                redirectTo: 'actaconstitucion',
                pathMatch: 'full'
            },
            {
                path: 'actaconstitucion',
                component: ActaConstitucionComponent
            }, {
                path: 'planificacion',
                component: PlanificacionProyectoComponent
            }, {
                path: 'gestionconfiguno',
                component: GestionConfiguracionUnoComponent
            }, {
                path: 'gestionconfigdos',
                component: GestionConfiguracionDosComponent
            }
        ]
    }
];
@NgModule({
    declarations: [
        AppComponent,
        ActaConstitucionComponent,
        HomeComponent,
        PlanificacionProyectoComponent,
        GestionConfiguracionUnoComponent,
        GestionConfiguracionDosComponent
    ],
    imports: [
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
