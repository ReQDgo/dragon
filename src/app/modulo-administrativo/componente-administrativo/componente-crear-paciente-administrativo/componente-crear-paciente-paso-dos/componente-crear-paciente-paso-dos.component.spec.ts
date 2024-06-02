import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCrearPacientePasoDosComponent } from './componente-crear-paciente-paso-dos.component';

describe('ComponenteCrearPacientePasoDosComponent', () => {
  let component: ComponenteCrearPacientePasoDosComponent;
  let fixture: ComponentFixture<ComponenteCrearPacientePasoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCrearPacientePasoDosComponent]
    });
    fixture = TestBed.createComponent(ComponenteCrearPacientePasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
