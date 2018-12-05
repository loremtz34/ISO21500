import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarContratosProveedoresComponent } from './listar-contratos-proveedores.component';

describe('ListarContratosProveedoresComponent', () => {
  let component: ListarContratosProveedoresComponent;
  let fixture: ComponentFixture<ListarContratosProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarContratosProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarContratosProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
