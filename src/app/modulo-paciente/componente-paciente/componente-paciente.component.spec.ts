import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePacienteComponent } from './componente-paciente.component';

describe('ComponentePacienteComponent', () => {
  let component: ComponentePacienteComponent;
  let fixture: ComponentFixture<ComponentePacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePacienteComponent]
    });
    fixture = TestBed.createComponent(ComponentePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
