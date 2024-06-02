import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearCitaPasoDosComponent } from './componente-crear-cita-paso-dos.component';

describe('ComponenteCrearCitaPasoDosComponent', () => {
  let component: ComponenteCrearCitaPasoDosComponent;
  let fixture: ComponentFixture<ComponenteCrearCitaPasoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearCitaPasoDosComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearCitaPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
