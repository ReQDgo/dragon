import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePopupConfirmarSalirComponent } from './componente-popup-confirmar-salir.component';

describe('ComponentePopupConfirmarSalirComponent', () => {
  let component: ComponentePopupConfirmarSalirComponent;
  let fixture: ComponentFixture<ComponentePopupConfirmarSalirComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePopupConfirmarSalirComponent]
    });
    fixture = TestBed.createComponent(ComponentePopupConfirmarSalirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
