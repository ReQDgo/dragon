import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePasosFormularioComponent } from './componente-pasos-formulario.component';

describe('ComponentePasosFormularioComponent', () => {
  let component: ComponentePasosFormularioComponent;
  let fixture: ComponentFixture<ComponentePasosFormularioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePasosFormularioComponent]
    });
    fixture = TestBed.createComponent(ComponentePasosFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
