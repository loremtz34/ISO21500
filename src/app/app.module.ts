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
import { MostrarComponent } from './integracion/cambios/mostrar/mostrar.component';
import { CrearComponent } from './integracion/cambios/crear/crear.component';
import { ActaRiesgoComponent } from './integracion/acta-riesgo/acta-riesgo.component';

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
            },
            {
                path: 'cambios',
                children: [
                    {
                        path: '',
                        component: MostrarComponent
                    },
                    {
                        path: 'crear',
                        component: CrearComponent
                    }
                ]
            },
            {
                path: 'gestionriesgo',
                component: ActaRiesgoComponent
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
        GestionConfiguracionDosComponent,
        MostrarComponent,
        CrearComponent,
        ActaRiesgoComponent
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
