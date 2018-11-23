import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({

  selector: 'abe-crear-actividades',
  templateUrl: './crear-actividades.component.html',
  styleUrls: ['./crear-actividades.component.scss']
})
export class CrearActividadesComponent implements OnInit {

  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	titulo:'',
    	codigo:'',
    	fecha:'',
    	persona_responsable:'',
    	departamento:'',
    	codigo_actividad:'',
    	actividad:'',
    	descripcion_trabajo:'',
    	actividad_predecesora:'',
    	relaciones_logicas:'',
    	adelantos_retrasos:'',
    	actividad_sucesora:'',
    	relaciones_logicas2:'',
    	adelantos_retrasos2:'',
    	nombre_recurso:'',
    	habilidades_requeridas:'',
    	recursos_requeridos:'',
    	nivel_esfuerzo:'',
    	supuestos:'',



    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}