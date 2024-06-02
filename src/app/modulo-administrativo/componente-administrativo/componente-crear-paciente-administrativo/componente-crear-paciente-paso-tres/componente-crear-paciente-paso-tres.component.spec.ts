import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearPacientePasoTresComponent } from './componente-crear-paciente-paso-tres.component';

describe('ComponenteCrearPacientePasoTresComponent', () => {
  let component: ComponenteCrearPacientePasoTresComponent;
  let fixture: ComponentFixture<ComponenteCrearPacientePasoTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearPacientePasoTresComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearPacientePasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
