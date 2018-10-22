import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecursosComponent } from './crear-recursos.component';

describe('CrearRecursosComponent', () => {
  let component: CrearRecursosComponent;
  let fixture: ComponentFixture<CrearRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
