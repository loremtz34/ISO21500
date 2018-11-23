import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-gestion-configuracion-uno',
  templateUrl: './gestion-configuracion-uno.component.html',
  styleUrls: ['./gestion-configuracion-uno.component.scss']
})
export class GestionConfiguracionUnoComponent implements OnInit {
private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	codigo:'',
    	titulo:'',
    	persona_responsable:'',
    	departamento:'',
    	persona_comite:'',
    	firma_persona_comite:'',

    	gestion_cambio:'',
    	contabilidad_estado:'',
    	verificacion_auditoria:'',



    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
