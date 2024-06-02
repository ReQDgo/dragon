import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCajaInformacionPacienteComponent } from './componente-caja-informacion-paciente.component';

describe('ComponenteCajaInformacionPacienteComponent', () => {
  let component: ComponenteCajaInformacionPacienteComponent;
  let fixture: ComponentFixture<ComponenteCajaInformacionPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCajaInformacionPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteCajaInformacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
