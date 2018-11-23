import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-gestion-configuracion-dos',
  templateUrl: './gestion-configuracion-dos.component.html',
  styleUrls: ['./gestion-configuracion-dos.component.scss']
})
export class GestionConfiguracionDosComponent implements OnInit {
private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) { 
  this.todo = this.formBuilder.group({
  	codigo:'',
  	titulo:'',
  	persona_responsable:'',
  	departamento:'',
  	persona_comite:'',
  	firma_persona_comite:'',
  	objetivos_plan:'',

  	procedimiento_cambios:'',
  	codigo_documento:'',
  	procedimiento_comunicacion:'',
  	procedimiento_configuracion:'',
  	procedimiento_auditoria:'',


    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
