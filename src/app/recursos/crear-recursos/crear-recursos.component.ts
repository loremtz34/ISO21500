import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-crear-recursos',
  templateUrl: './crear-recursos.component.html',
  styleUrls: ['./crear-recursos.component.scss']
})
export class CrearRecursosComponent implements OnInit {

private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	fecha:'',
    	persona_responsable:'',
    	departamento:'',
    	vision_estrategia:'',

    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
