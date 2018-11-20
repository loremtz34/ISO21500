import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarAdquisicionesComponent } from './adquisicion/listar-adquisiciones/listar-adquisiciones.component';
import { CrearAdquisicionesComponent } from './adquisicion/crear-adquisiciones/crear-adquisiciones.component';
import { ListarProveedoresComponent } from './proveedores/listar-proveedores/listar-proveedores.component';
import { CrearProveedoresComponent } from './proveedores/crear-proveedores/crear-proveedores.component';
import { ContratoComponent } from './contrato/contrato.component';

const routes: Routes = [
  {
    path: 'adquisiciones', children: [
      { path: '', component: ListarAdquisicionesComponent },
      { path: 'crear', component: CrearAdquisicionesComponent }
    ]
  },
  {
    path: 'proveedores', children: [
      { path: '', component: ListarProveedoresComponent },
      { path: 'crear', component: CrearProveedoresComponent }
    ]
  },
  {
    path: 'contrato', component: ContratoComponent
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
    ListarAdquisicionesComponent,
    CrearAdquisicionesComponent,
    CrearProveedoresComponent,
    ListarProveedoresComponent,
    ContratoComponent
  ]
})
export class AdquisicionRoutingModule { }
