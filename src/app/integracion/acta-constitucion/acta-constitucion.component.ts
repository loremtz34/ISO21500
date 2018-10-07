import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'abe-acta-constitucion',
  templateUrl: './acta-constitucion.component.html',
  styleUrls: ['./acta-constitucion.component.scss']
})
export class ActaConstitucionComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder, ) {
    this.todo = this.formBuilder.group({
      fecha: ''
    });
  }

  ngOnInit() {
  }
  logForm() {
    console.log(this.todo.value);
  }
}
