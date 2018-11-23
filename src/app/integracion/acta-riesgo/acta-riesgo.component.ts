import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'abe-acta-riesgo',
  templateUrl: './acta-riesgo.component.html',
  styleUrls: ['./acta-riesgo.component.scss']
})
export class ActaRiesgoComponent implements OnInit {
private todo: FormGroup;

  constructor(private formBuilder:FormBuilder, ) { 
  this.todo = this.formBuilder.group({
  	titulo:'',
  	persona_responsable:'',
  	departamento_riezgo:'',
  	edicion_previa:'',
  	fecha_edicion:'',
  	edicion_revisada:'',
  	fecha_revision:'',
  	descripcion_proc_gestion:'',
  	herramientas_identificacion:'',


    presupuesto_riesgo:'',
    protocolo_contingencia:'',
    protocolo_riesgos:'',
    protocolo_comunicacion:'',
    protocolo_auditoria:'',

    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}