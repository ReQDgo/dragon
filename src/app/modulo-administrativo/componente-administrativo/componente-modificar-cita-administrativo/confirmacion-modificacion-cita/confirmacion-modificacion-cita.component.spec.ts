import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionModificacionCitaComponent } from './confirmacion-modificacion-cita.component';

describe('ConfirmacionModificacionCitaComponent', () => {
  let component: ConfirmacionModificacionCitaComponent;
  let fixture: ComponentFixture<ConfirmacionModificacionCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionModificacionCitaComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionModificacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
