import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCancelarCitaPacienteFinalComponent } from './componente-cancelar-cita-paciente-final.component';

describe('ComponenteCancelarCitaPacienteFinalComponent', () => {
  let component: ComponenteCancelarCitaPacienteFinalComponent;
  let fixture: ComponentFixture<ComponenteCancelarCitaPacienteFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCancelarCitaPacienteFinalComponent]
    });
    fixture = TestBed.createComponent(ComponenteCancelarCitaPacienteFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
