import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
	selector: 'abe-gestion-equipos',
	templateUrl: './gestion-equipos.component.html',
	styleUrls: ['./gestion-equipos.component.scss']
})
export class GestionEquiposComponent implements OnInit {
	private todo: FormGroup;
	id: number;
	private sub: any;
	constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
		this.todo = this.formBuilder.group({
			codigo: '',
			titulo: '',
			persona_responsable: '',
			firma_responsable: '',
			persona_miembro: '',
			rol: '',
			desde: '',
			hasta: '',
			fecha_estado: '',
			vision: '',
			fortalezas: '',
			areas_mejora: '',
			justificacion: '',
			comentarios_adicionales: '',



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
