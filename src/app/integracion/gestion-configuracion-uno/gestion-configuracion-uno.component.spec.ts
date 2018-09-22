import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionConfiguracionUnoComponent } from './gestion-configuracion-uno.component';

describe('GestionConfiguracionUnoComponent', () => {
  let component: GestionConfiguracionUnoComponent;
  let fixture: ComponentFixture<GestionConfiguracionUnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionConfiguracionUnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionConfiguracionUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
