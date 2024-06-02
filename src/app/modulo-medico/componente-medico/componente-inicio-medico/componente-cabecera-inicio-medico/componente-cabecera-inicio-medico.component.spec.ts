import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCabeceraInicioMedicoComponent } from './componente-cabecera-inicio-medico.component';

describe('ComponenteCabeceraInicioMedicoComponent', () => {
  let component: ComponenteCabeceraInicioMedicoComponent;
  let fixture: ComponentFixture<ComponenteCabeceraInicioMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCabeceraInicioMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCabeceraInicioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
