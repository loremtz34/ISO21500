import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCambioComponent } from './editar-cambio.component';

describe('EditarCambioComponent', () => {
  let component: EditarCambioComponent;
  let fixture: ComponentFixture<EditarCambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
