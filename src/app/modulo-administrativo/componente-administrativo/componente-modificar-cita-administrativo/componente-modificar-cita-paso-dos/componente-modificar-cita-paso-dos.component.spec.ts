import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteModificarCitaPasoDosComponent } from './componente-modificar-cita-paso-dos.component';

describe('ComponenteModificarCitaPasoDosComponent', () => {
  let component: ComponenteModificarCitaPasoDosComponent;
  let fixture: ComponentFixture<ComponenteModificarCitaPasoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteModificarCitaPasoDosComponent]
    });
    fixture = TestBed.createComponent(ComponenteModificarCitaPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
