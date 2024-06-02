import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCancelarCitaPacienteComponent } from './componente-cancelar-cita-paciente.component';

describe('ComponenteCancelarCitaPacienteComponent', () => {
  let component: ComponenteCancelarCitaPacienteComponent;
  let fixture: ComponentFixture<ComponenteCancelarCitaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCancelarCitaPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteCancelarCitaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
