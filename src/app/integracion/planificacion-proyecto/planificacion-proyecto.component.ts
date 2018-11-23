import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-planificacion-proyecto',
  templateUrl: './planificacion-proyecto.component.html',
  styleUrls: ['./planificacion-proyecto.component.scss']
})
export class PlanificacionProyectoComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
      codigo:'',
      titulo:'',
      persona_responsable:'',
      departamento:'',
      firma_persona_responsable_revision:'',
      persona_responsable_aprobacion:'',
      firma_persona_responsable_aprobacion:'',

      gestion_cronograma:'',
      umbral_variacion:'',
      seguimiento_control:'',
      gestion_coste:'',
      umbral_variacion_coste:'',
      seguimiento_control_coste:'',
      gestion_alcance:'',
      umbral_variacion_alcance:'',
      seguimiento_control_alcance:'',
      gestion_calidad:'',
      umbral_variacion_calidad:'',
      seguimiento_control_calidad:'',

      procesos_comunicacion_interesados:'',
      medidas_adaptacion:'',
      aspectos_pendientes:'',
      proceso_revision:'',


    });
  }

  ngOnInit() {
  }
  logForm() {

  }
}
