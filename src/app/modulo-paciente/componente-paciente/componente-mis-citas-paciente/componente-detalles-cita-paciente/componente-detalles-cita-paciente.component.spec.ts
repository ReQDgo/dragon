import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteDetallesCitaPacienteComponent } from './componente-detalles-cita-paciente.component';

describe('ComponenteDetallesCitaPacienteComponent', () => {
  let component: ComponenteDetallesCitaPacienteComponent;
  let fixture: ComponentFixture<ComponenteDetallesCitaPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteDetallesCitaPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteDetallesCitaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
