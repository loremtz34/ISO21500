import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ActaConstitucionComponent } from './acta-constitucion/acta-constitucion.component';
import { PlanificacionProyectoComponent } from './planificacion-proyecto/planificacion-proyecto.component';
import { GestionConfiguracionUnoComponent } from './gestion-configuracion-uno/gestion-configuracion-uno.component';
import { GestionConfiguracionDosComponent } from './gestion-configuracion-dos/gestion-configuracion-dos.component';
import { MostrarComponent } from './cambios/mostrar/mostrar.component';
import { CrearComponent } from './cambios/crear/crear.component';
import { LeccionesAprendidasComponent } from './lecciones-aprendidas/lecciones-aprendidas.component';
import { CrearLeccionComponent } from './crear-leccion/crear-leccion.component';
import { ActaRiesgoComponent } from './acta-riesgo/acta-riesgo.component';
import { EditarCambioComponent } from './cambios/editar-cambio/editar-cambio.component';
import { EditarLeccionComponent } from './editar-leccion/editar-leccion.component';

const routes: Routes = [
  { path: '', redirectTo: 'actaconstitucion', pathMatch: 'full' },
  { path: 'actaconstitucion', component: ActaConstitucionComponent },
  { path: 'planificacion', component: PlanificacionProyectoComponent },
  { path: 'gestionconfiguno', component: GestionConfiguracionUnoComponent },
  { path: 'gestionconfigdos', component: GestionConfiguracionDosComponent },
  {
    path: 'cambios', children: [
      { path: '', component: MostrarComponent },
      { path: 'crear', component: CrearComponent },
      { path: 'editar/:id', component: EditarCambioComponent }
    ]
  },
  {
    path: 'lecciones', children: [
      { path: '', component: LeccionesAprendidasComponent },
      { path: 'crear', component: CrearLeccionComponent },
      { path: 'editar/:id', component: EditarLeccionComponent }
    ]
  },
  { path: 'gestionriesgo', component: ActaRiesgoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [
    ActaConstitucionComponent,
    PlanificacionProyectoComponent,
    GestionConfiguracionUnoComponent,
    GestionConfiguracionDosComponent,
    MostrarComponent,
    CrearComponent,
    ActaRiesgoComponent,
    LeccionesAprendidasComponent,
    CrearLeccionComponent,
    EditarCambioComponent,
    EditarLeccionComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IntegracionRoutingModule { }
