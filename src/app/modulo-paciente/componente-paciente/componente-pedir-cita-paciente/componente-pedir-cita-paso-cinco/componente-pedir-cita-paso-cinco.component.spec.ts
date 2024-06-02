import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPasoCincoComponent } from './componente-pedir-cita-paso-cinco.component';

describe('ComponentePedirCitaPasoCincoComponent', () => {
  let component: ComponentePedirCitaPasoCincoComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPasoCincoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPasoCincoComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPasoCincoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
