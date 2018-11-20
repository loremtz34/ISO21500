import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'abe-listar-equipos',
  templateUrl: './listar-equipos.component.html',
  styleUrls: ['./listar-equipos.component.scss']
})
export class ListarEquiposComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  miembrosEquipo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'gray modal-lg' }));
  }
  onFilesAdded(event) {
    console.log(event.target.files[0]);
  }
}
