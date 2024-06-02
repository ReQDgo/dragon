import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePedirCitaPasoTresComponent } from './componente-pedir-cita-paso-tres.component';

describe('ComponentePedirCitaPasoTresComponent', () => {
  let component: ComponentePedirCitaPasoTresComponent;
  let fixture: ComponentFixture<ComponentePedirCitaPasoTresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePedirCitaPasoTresComponent]
    });
    fixture = TestBed.createComponent(ComponentePedirCitaPasoTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
