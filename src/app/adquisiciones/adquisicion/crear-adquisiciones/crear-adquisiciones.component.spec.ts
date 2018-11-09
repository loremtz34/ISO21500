import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAdquisicionesComponent } from './crear-adquisiciones.component';

describe('CrearAdquisicionesComponent', () => {
  let component: CrearAdquisicionesComponent;
  let fixture: ComponentFixture<CrearAdquisicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAdquisicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAdquisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
