import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'abe-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  completionPercent: any;
  constructor() { }

  ngOnInit() {
    this.completionPercent = 20;
  }

}
