import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloEquiposComponent } from './desarrollo-equipos.component';

describe('DesarrolloEquiposComponent', () => {
  let component: DesarrolloEquiposComponent;
  let fixture: ComponentFixture<DesarrolloEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesarrolloEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
