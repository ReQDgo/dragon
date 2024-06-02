import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPacienteFinalComponent } from './componente-pedir-cita-paciente-final.component';

describe('ComponentePedirCitaPacienteFinalComponent', () => {
  let component: ComponentePedirCitaPacienteFinalComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPacienteFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPacienteFinalComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPacienteFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
