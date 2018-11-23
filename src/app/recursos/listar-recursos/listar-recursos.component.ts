import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-listar-recursos',
  templateUrl: './listar-recursos.component.html',
  styleUrls: ['./listar-recursos.component.scss']
})
export class ListarRecursosComponent implements OnInit {

  private todo: FormGroup;
    constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	fecha:'',
    	titulo:'',
    	persona_responsable:'',


   });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
