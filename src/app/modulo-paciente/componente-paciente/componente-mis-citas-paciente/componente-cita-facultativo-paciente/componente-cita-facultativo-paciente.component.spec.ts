import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCitaFacultativoPacienteComponent } from './componente-cita-facultativo-paciente.component';

describe('ComponenteCitaFacultativoPacienteComponent', () => {
  let component: ComponenteCitaFacultativoPacienteComponent;
  let fixture: ComponentFixture<ComponenteCitaFacultativoPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCitaFacultativoPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteCitaFacultativoPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
