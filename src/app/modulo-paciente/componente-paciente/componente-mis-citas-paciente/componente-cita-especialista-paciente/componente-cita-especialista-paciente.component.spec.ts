import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCitaEspecialistaPacienteComponent } from './componente-cita-especialista-paciente.component';

describe('ComponenteCitaEspecialistaPacienteComponent', () => {
  let component: ComponenteCitaEspecialistaPacienteComponent;
  let fixture: ComponentFixture<ComponenteCitaEspecialistaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCitaEspecialistaPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteCitaEspecialistaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
