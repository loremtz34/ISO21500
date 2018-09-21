import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ActaConstitucionComponent } from './integracion/acta-constitucion/acta-constitucion.component';
import { HomeComponent } from './home/home.component';
import { PlanificacionProyectoComponent } from './integracion/planificacion-proyecto/planificacion-proyecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
            }
        ]
    }
];
@NgModule({
    declarations: [
        AppComponent,
        ActaConstitucionComponent,
        HomeComponent,
        PlanificacionProyectoComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }
        ),
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
