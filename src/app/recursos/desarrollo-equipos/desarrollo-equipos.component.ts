import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-desarrollo-equipos',
  templateUrl: './desarrollo-equipos.component.html',
  styleUrls: ['./desarrollo-equipos.component.scss']
})
export class DesarrolloEquiposComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	codigo_proyecto:'',
    	titulo:'',
    	persona_responsable:'',
    	firma:'',
    	persona_miembro:'',
    	rol:'',
    	desde:'',
    	hasta:'',
    	fecha_estado:'',

    	causas_desviacion:'',

    	causas_desviacion_calidad:'',

    	desde2:'',
    	hasta2:'',
    	prox_fecha_revision:'',

    	fondos_presupuesto:'',
    	nuevos_riesgos:'',
    	comentarios:'',
    	problemas:'',



    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
