import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAdquisicionesComponent } from './listar-adquisiciones.component';

describe('ListarAdquisicionesComponent', () => {
  let component: ListarAdquisicionesComponent;
  let fixture: ComponentFixture<ListarAdquisicionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAdquisicionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAdquisicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
