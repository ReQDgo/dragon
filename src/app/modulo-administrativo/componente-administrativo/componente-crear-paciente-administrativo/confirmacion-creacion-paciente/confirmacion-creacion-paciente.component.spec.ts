import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionCreacionPacienteComponent } from './confirmacion-creacion-paciente.component';

describe('ConfirmacionCreacionPacienteComponent', () => {
  let component: ConfirmacionCreacionPacienteComponent;
  let fixture: ComponentFixture<ConfirmacionCreacionPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionCreacionPacienteComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionCreacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
