import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionEliminacionCitaComponent } from './confirmacion-eliminacion-cita.component';

describe('ConfirmacionEliminacionCitaComponent', () => {
  let component: ConfirmacionEliminacionCitaComponent;
  let fixture: ComponentFixture<ConfirmacionEliminacionCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionEliminacionCitaComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionEliminacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
