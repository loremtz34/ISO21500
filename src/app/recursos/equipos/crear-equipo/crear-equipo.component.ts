import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.scss']
})
export class CrearEquipoComponent implements OnInit {

  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	fecha:'',
    	titulo:'',
    	codigo:'',
    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
