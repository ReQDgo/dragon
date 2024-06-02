import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteResumenDatosCrearCitaPasoTresComponent } from './componente-resumen-datos-crear-cita-paso-tres.component';

describe('ComponenteResumenDatosCrearCitaPasoTresComponent', () => {
  let component: ComponenteResumenDatosCrearCitaPasoTresComponent;
  let fixture: ComponentFixture<ComponenteResumenDatosCrearCitaPasoTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteResumenDatosCrearCitaPasoTresComponent]
    });
    fixture = TestBed.createComponent(ComponenteResumenDatosCrearCitaPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
