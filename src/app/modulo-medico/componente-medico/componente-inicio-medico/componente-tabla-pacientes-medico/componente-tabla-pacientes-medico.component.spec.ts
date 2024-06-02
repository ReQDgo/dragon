import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteTablaPacientesMedicoComponent } from './componente-tabla-pacientes-medico.component';

describe('ComponenteTablaPacientesMedicoComponent', () => {
  let component: ComponenteTablaPacientesMedicoComponent;
  let fixture: ComponentFixture<ComponenteTablaPacientesMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteTablaPacientesMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteTablaPacientesMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
