import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActaConstitucionComponent } from './acta-constitucion.component';

describe('ActaConstitucionComponent', () => {
  let component: ActaConstitucionComponent;
  let fixture: ComponentFixture<ActaConstitucionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActaConstitucionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActaConstitucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
