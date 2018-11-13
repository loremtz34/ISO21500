import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarEquiposComponent } from './equipos/listar-equipos/listar-equipos.component';
import { CrearEquipoComponent } from './equipos/crear-equipo/crear-equipo.component';
import { ListarRecursosComponent } from './listar-recursos/listar-recursos.component';
import { CrearRecursosComponent } from './crear-recursos/crear-recursos.component';
import { OrganizacionProyectoComponent } from './organizacion-proyecto/organizacion-proyecto.component';
import { ListarActividadesComponent } from './actividades/listar-actividades/listar-actividades.component';
import { CrearActividadesComponent } from './actividades/crear-actividades/crear-actividades.component';
import { GestionEquiposComponent } from './gestion-equipos/gestion-equipos.component';
import { DesarrolloEquiposComponent } from './desarrollo-equipos/desarrollo-equipos.component';


const routes: Routes = [
  { path: '', redirectTo: 'equipos', pathMatch: 'full' },
  { path: 'gestionequipo', component: GestionEquiposComponent },
  { path: 'desarrolloequipo', component: DesarrolloEquiposComponent },
  {
    path: 'equipos', children: [
      { path: '', component: ListarEquiposComponent },
      { path: 'crear', component: CrearEquipoComponent }
    ]
  },
  {
    path: 'recursos', children: [
      { path: '', component: ListarRecursosComponent },
      { path: 'crear', component: CrearRecursosComponent }
    ]
  },
  { path: 'organizacionproyecto', component: OrganizacionProyectoComponent },
  {
    path: 'actividades', children: [
      { path: '', component: ListarActividadesComponent },
      { path: 'crear', component: CrearActividadesComponent }
    ]
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [
    ListarEquiposComponent,
    CrearEquipoComponent,
    ListarRecursosComponent,
    CrearRecursosComponent,
    OrganizacionProyectoComponent,
    ListarActividadesComponent,
    CrearActividadesComponent,
    GestionEquiposComponent,
    DesarrolloEquiposComponent
  ]
})
export class RecursosRoutingModule { }
