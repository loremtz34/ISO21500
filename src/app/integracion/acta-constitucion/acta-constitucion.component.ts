import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-acta-constitucion',
  templateUrl: './acta-constitucion.component.html',
  styleUrls: ['./acta-constitucion.component.scss']
})
export class ActaConstitucionComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder,) {
    this.todo = this.formBuilder.group({
      nombre: '',
      fecha: '',
      cliente: '',
      patrocinador: '',
      codigo_identificacion: '',
      pendiente_asignacion: '',
      contrato: '',
      caso_de_negocio: '',
      enunciado_trabajo: '',
      vision_estrategica: '',
      descripcion_del_proyecto: '',
      analisis_de_viabilidad: '',
      requisitos_generales: '',
      objetivos_alcance: '',
      metrica_alcance: '',
      aprobacion_persona_alcance: '',
      obejtivos_plazo: '',
      metrica_plazo: '',
      aprobacion_persona_plazo: '',
      obejtivos_presupuesto: '',
      metrica_presupuesto: '',
      aprobacion_persona_presupuesto: '',
      obejtivos_calidad: '',
      metrica_calidad: '',
      aprobacion_persona_calidad: '',
      obejtivos_otros: '',
      metrica_otros: '',
      aprobacion_persona_otros: '',
      fase: '',

      departamentos_implicados: '',
      normativa_aplicable: '',
      factores_criticos_de_exito: '',
      observaciones: '',
      maxima_desviacion_sobre_presupuesto: '',
      umbral_de_riesgo_aceptable: '',
      capacidad_tecnica_de_desicion: '',
      volumen_de_contratacion: '', 
      persona_nivel_superior_de_desicion: '',

    });
  }

  ngOnInit() {
  }
  logForm(){
    console.log(this.todo.value);
  }
}
