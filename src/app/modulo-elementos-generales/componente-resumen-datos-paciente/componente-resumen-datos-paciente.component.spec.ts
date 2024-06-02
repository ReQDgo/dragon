import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenDatosPacienteComponent } from './componente-resumen-datos-paciente.component';

describe('ComponenteResumenDatosPacienteComponent', () => {
  let component: ComponenteResumenDatosPacienteComponent;
  let fixture: ComponentFixture<ComponenteResumenDatosPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenDatosPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenDatosPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
