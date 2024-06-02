import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearPacienteAdministrativoComponent } from './componente-crear-paciente-administrativo.component';

describe('ComponenteCrearPacienteAdministrativoComponent', () => {
  let component: ComponenteCrearPacienteAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteCrearPacienteAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearPacienteAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearPacienteAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
