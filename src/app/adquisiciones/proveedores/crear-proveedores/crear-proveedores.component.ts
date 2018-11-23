import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-crear-proveedores',
  templateUrl: './crear-proveedores.component.html',
  styleUrls: ['./crear-proveedores.component.scss']
})
export class CrearProveedoresComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
  		nombre:'',
  		nombre_empresa:'',
  		direccion:'',
  		tipo_servicio:'',
  		telefono:'',
  		email:'', 
  		nit:'',




    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
