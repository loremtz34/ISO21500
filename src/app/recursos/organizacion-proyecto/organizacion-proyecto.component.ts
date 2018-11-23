import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-organizacion-proyecto',
  templateUrl: './organizacion-proyecto.component.html',
  styleUrls: ['./organizacion-proyecto.component.scss']
})
export class OrganizacionProyectoComponent implements OnInit {

  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	fecha:'',
    	titulo:'',
    	cliente:'',
    	persona_cliente:'',
    	departamento:'',
    	principios:'',
    	directrices:'',
    	directrices_reunion:'',
    	proceso_decisiones:'',
    	directrices_afrontar:'',
    	compromisos:'',
    	otros_acuerdos:'',


    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}