import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'abe-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) { 
      this.todo = this.formBuilder.group({
    titulo:'',
    codigo:'',
    fecha:'',
    persona_responsable:'',
    departamento:'',

    alcance:'',
    costo:'',
    plazo:'',
    otro:'',
    relacion_valorada:'',
    plano:'',
    otro_otro:'',
    documentacion_escribiendo:'',
    aprueba:'',
    aplaza:'',
    rechaza:'',
    cliente_escribiendo:'',

 });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
