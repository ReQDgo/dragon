import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearCitaPasoTresComponent } from './componente-crear-cita-paso-tres.component';

describe('ComponenteCrearCitaPasoTresComponent', () => {
  let component: ComponenteCrearCitaPasoTresComponent;
  let fixture: ComponentFixture<ComponenteCrearCitaPasoTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearCitaPasoTresComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearCitaPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
