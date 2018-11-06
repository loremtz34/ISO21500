import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEquiposComponent } from './gestion-equipos.component';

describe('GestionEquiposComponent', () => {
  let component: GestionEquiposComponent;
  let fixture: ComponentFixture<GestionEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
