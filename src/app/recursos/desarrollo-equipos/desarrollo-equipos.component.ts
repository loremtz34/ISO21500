import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'abe-desarrollo-equipos',
	templateUrl: './desarrollo-equipos.component.html',
	styleUrls: ['./desarrollo-equipos.component.scss']
})
export class DesarrolloEquiposComponent implements OnInit {
	private todo: FormGroup;
	id: number;
	private sub: any;
	constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
		this.todo = this.formBuilder.group({
			codigo_proyecto: '',
			titulo: '',
			persona_responsable: '',
			firma: '',
			persona_miembro: '',
			rol: '',
			desde: '',
			hasta: '',
			fecha_estado: '',

			causas_desviacion: '',

			causas_desviacion_calidad: '',

			desde2: '',
			hasta2: '',
			prox_fecha_revision: '',

			fondos_presupuesto: '',
			nuevos_riesgos: '',
			comentarios: '',
			problemas: '',



		});
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.id = +params['id']; // (+) converts string 'id' to a number
			console.log(this.id);
			// In a real app: dispatch action to load the details here.
		});
	}
	logForm() {
		console.log(this.todo.value);
	}
}
