import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePopupConfirmarCancelarComponent } from './componente-popup-confirmar-cancelar.component';

describe('ComponentePopupConfirmarCancelarComponent', () => {
  let component: ComponentePopupConfirmarCancelarComponent;
  let fixture: ComponentFixture<ComponentePopupConfirmarCancelarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentePopupConfirmarCancelarComponent]
    });
    fixture = TestBed.createComponent(ComponentePopupConfirmarCancelarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
