import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteHistorialPacienteComponent } from './componente-historial-paciente.component';

describe('ComponenteHistorialPacienteComponent', () => {
  let component: ComponenteHistorialPacienteComponent;
  let fixture: ComponentFixture<ComponenteHistorialPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteHistorialPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteHistorialPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
