import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMisCitasPacienteComponent } from './componente-mis-citas-paciente.component';

describe('ComponenteMisCitasPacienteComponent', () => {
  let component: ComponenteMisCitasPacienteComponent;
  let fixture: ComponentFixture<ComponenteMisCitasPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteMisCitasPacienteComponent]
    });
    fixture = TestBed.createComponent(ComponenteMisCitasPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
