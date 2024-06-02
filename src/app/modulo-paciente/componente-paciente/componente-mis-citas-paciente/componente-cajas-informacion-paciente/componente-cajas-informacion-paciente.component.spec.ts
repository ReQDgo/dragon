import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCajasInformacionPacienteComponent } from './componente-cajas-informacion-paciente.component';

describe('ComponenteCajasInformacionPacienteComponent', () => {
  let component: ComponenteCajasInformacionPacienteComponent;
  let fixture: ComponentFixture<ComponenteCajasInformacionPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCajasInformacionPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteCajasInformacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
