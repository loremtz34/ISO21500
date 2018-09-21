import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionProyectoComponent } from './planificacion-proyecto.component';

describe('PlanificacionProyectoComponent', () => {
  let component: PlanificacionProyectoComponent;
  let fixture: ComponentFixture<PlanificacionProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanificacionProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanificacionProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
