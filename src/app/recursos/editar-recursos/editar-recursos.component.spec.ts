import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRecursosComponent } from './editar-recursos.component';

describe('EditarRecursosComponent', () => {
  let component: EditarRecursosComponent;
  let fixture: ComponentFixture<EditarRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
