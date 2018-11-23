import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-gestion-equipos',
  templateUrl: './gestion-equipos.component.html',
  styleUrls: ['./gestion-equipos.component.scss']
})
export class GestionEquiposComponent implements OnInit {
	private todo: FormGroup;
    constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	codigo:'',
    	titulo:'',
    	persona_responsable:'',
    	firma_responsable:'',
    	persona_miembro:'',
    	rol:'',
    	desde:'',
    	hasta:'',
    	fecha_estado:'',
    	vision:'',
    	fortalezas:'',
    	areas_mejora:'',
    	justificacion:'',
    	comentarios_adicionales:'',



   });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
