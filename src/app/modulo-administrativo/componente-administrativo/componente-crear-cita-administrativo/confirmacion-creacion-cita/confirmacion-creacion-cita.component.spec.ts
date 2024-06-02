import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionCreacionCitaComponent } from './confirmacion-creacion-cita.component';

describe('ConfirmacionCreacionCitaComponent', () => {
  let component: ConfirmacionCreacionCitaComponent;
  let fixture: ComponentFixture<ConfirmacionCreacionCitaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionCreacionCitaComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionCreacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
