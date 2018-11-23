import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-crear-leccion',
  templateUrl: './crear-leccion.component.html',
  styleUrls: ['./crear-leccion.component.scss']
})
export class CrearLeccionComponent implements OnInit {
private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
    	nombre:'',
    	codigo:'',
    	objetivo:'',
    	descripcion:'',
    	informe:'',
     });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
