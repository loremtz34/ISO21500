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
      fecha: ''
    });
  }

  ngOnInit() {
  }
  logForm() {

  }
}
