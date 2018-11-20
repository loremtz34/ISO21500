import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'abe-crear-proveedores',
  templateUrl: './crear-proveedores.component.html',
  styleUrls: ['./crear-proveedores.component.scss']
})
export class CrearProveedoresComponent implements OnInit {
  private todo: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
