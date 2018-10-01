import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaRiesgoComponent } from './acta-riesgo.component';

describe('ActaRiesgoComponent', () => {
  let component: ActaRiesgoComponent;
  let fixture: ComponentFixture<ActaRiesgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaRiesgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaRiesgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
