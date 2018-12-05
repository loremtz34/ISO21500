import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresSeleccionadosComponent } from './proveedores-seleccionados.component';

describe('ProveedoresSeleccionadosComponent', () => {
  let component: ProveedoresSeleccionadosComponent;
  let fixture: ComponentFixture<ProveedoresSeleccionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedoresSeleccionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresSeleccionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
