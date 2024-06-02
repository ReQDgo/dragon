import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInicioMedicoComponent } from './componente-inicio-medico.component';

describe('ComponenteInicioMedicoComponent', () => {
  let component: ComponenteInicioMedicoComponent;
  let fixture: ComponentFixture<ComponenteInicioMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteInicioMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteInicioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
