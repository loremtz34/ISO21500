import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConfiguracionDosComponent } from './gestion-configuracion-dos.component';

describe('GestionConfiguracionDosComponent', () => {
  let component: GestionConfiguracionDosComponent;
  let fixture: ComponentFixture<GestionConfiguracionDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConfiguracionDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConfiguracionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
