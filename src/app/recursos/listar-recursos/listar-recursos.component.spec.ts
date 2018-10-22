import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRecursosComponent } from './listar-recursos.component';

describe('ListarRecursosComponent', () => {
  let component: ListarRecursosComponent;
  let fixture: ComponentFixture<ListarRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
