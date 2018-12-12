import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarAdquisicionesComponent } from './adquisicion/listar-adquisiciones/listar-adquisiciones.component';
import { CrearAdquisicionesComponent } from './adquisicion/crear-adquisiciones/crear-adquisiciones.component';
import { ListarProveedoresComponent } from './proveedores/listar-proveedores/listar-proveedores.component';
import { CrearProveedoresComponent } from './proveedores/crear-proveedores/crear-proveedores.component';
import { ContratoComponent } from './contrato/contrato.component';
import { EditarProveedorComponent } from './proveedores/editar-proveedor/editar-proveedor.component';
import { EditarAdquisicionComponent } from './adquisicion/editar-adquisicion/editar-adquisicion.component';
import { ProveedoresSeleccionadosComponent } from './proveedores/proveedores-seleccionados/proveedores-seleccionados.component';
import { ListarContratosProveedoresComponent } from './proveedores/listar-contratos-proveedores/listar-contratos-proveedores.component';
import { VerContratoComponent } from './ver-contrato/ver-contrato.component';

const routes: Routes = [
  {
    path: 'adquisiciones', children: [
      { path: '', component: ListarAdquisicionesComponent },
      { path: 'crear', component: CrearAdquisicionesComponent },
      { path: 'editar/:id', component: EditarAdquisicionComponent }
    ]
  },
  {
    path: 'proveedores', children: [
      { path: '', component: ListarProveedoresComponent },
      { path: 'crear', component: CrearProveedoresComponent },
      { path: 'contrato/:id', component: VerContratoComponent },
      { path: 'editar/:id', component: EditarProveedorComponent },
      { path: 'seleccionados', component: ProveedoresSeleccionadosComponent },
      { path: 'seleccionados/:id/contratos', component: ListarContratosProveedoresComponent },
      { path: 'seleccionados/:id/contratos/crear', component: ContratoComponent },
      { path: 'seleccionados/editar/:id', component: EditarProveedorComponent }
    ]
  },

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
    ContratoComponent,
    EditarProveedorComponent,
    EditarAdquisicionComponent,
    ProveedoresSeleccionadosComponent,
    ListarContratosProveedoresComponent,
    VerContratoComponent
  ]
})
export class AdquisicionRoutingModule { }
