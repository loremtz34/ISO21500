import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'abe-crear-adquisiciones',
  templateUrl: './crear-adquisiciones.component.html',
  styleUrls: ['./crear-adquisiciones.component.scss']
})
export class CrearAdquisicionesComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  private sub: any;
  id: number;
  ngOnInit() {
    console.log(this.router.url);
    this.sub = this.router.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
    });
    console.log(this.id);
  }

}
