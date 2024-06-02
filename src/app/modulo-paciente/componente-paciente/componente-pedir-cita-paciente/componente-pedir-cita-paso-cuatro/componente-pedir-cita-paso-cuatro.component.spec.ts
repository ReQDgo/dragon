import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPasoCuatroComponent } from './componente-pedir-cita-paso-cuatro.component';

describe('ComponentePedirCitaPasoCuatroComponent', () => {
  let component: ComponentePedirCitaPasoCuatroComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPasoCuatroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPasoCuatroComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPasoCuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
