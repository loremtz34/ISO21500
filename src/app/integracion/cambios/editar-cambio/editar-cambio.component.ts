import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'abe-editar-cambio',
  templateUrl: '../crear/crear.component.html',
  styleUrls: ['./editar-cambio.component.scss']
})
export class EditarCambioComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;
  private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      // In a real app: dispatch action to load the details here.
    });
  }

}
