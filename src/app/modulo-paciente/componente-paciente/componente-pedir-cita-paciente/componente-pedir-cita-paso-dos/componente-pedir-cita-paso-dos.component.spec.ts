import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPasoDosComponent } from './componente-pedir-cita-paso-dos.component';

describe('ComponentePedirCitaPasoDosComponent', () => {
  let component: ComponentePedirCitaPasoDosComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPasoDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPasoDosComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPasoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
