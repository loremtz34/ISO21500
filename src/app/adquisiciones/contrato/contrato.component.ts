import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	nombre_proveedor:'',
    	nombre_empresa:'',
    	nombre_lugar:'',
    	fecha:'',
    	num_nit:'',
    	lugar_empresa:'',
    	lugar_proveedor:'',
    	tipo_adquisicion:'',
    	tiempo_contrato:'',
    	pago:'',


    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}