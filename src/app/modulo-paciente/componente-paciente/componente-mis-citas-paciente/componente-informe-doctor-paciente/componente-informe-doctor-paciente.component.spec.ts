import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInformeDoctorPacienteComponent } from './componente-informe-doctor-paciente.component';

describe('ComponenteInformeDoctorPacienteComponent', () => {
  let component: ComponenteInformeDoctorPacienteComponent;
  let fixture: ComponentFixture<ComponenteInformeDoctorPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteInformeDoctorPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteInformeDoctorPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
