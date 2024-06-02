import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPacienteComponent } from './componente-pedir-cita-paciente.component';

describe('ComponentePedirCitaPacienteComponent', () => {
  let component: ComponentePedirCitaPacienteComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
