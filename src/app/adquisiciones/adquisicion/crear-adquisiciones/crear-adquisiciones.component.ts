import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-crear-adquisiciones',
  templateUrl: './crear-adquisiciones.component.html',
  styleUrls: ['./crear-adquisiciones.component.scss']
})
export class CrearAdquisicionesComponent implements OnInit {
private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
   this.todo = this.formBuilder.group({
  		titulo:'',
  		fecha:'',
  		edicion_version:'',
  		fecha_edicion:'',
  		persona_responsable_trabajos:'', 
  		alcance_adquisicion:'',
  		prescripciones_tecnicas:'',
  		cantidad_adquirir:'',
  		documentacion_informacion:'',
  		documentacion_entregar:'',
  		precio_maximo:'',
  		plazo_final:'',
  		info_incluir:'',
  		criterios_solvencia:'',
  		otra_info:'',



    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}

