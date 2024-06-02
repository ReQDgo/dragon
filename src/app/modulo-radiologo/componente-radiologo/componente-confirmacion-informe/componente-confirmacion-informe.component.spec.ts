import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionInformeComponent } from './componente-confirmacion-informe.component';

describe('ComponenteConfirmacionInformeComponent', () => {
  let component: ComponenteConfirmacionInformeComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionInformeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionInformeComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionInformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
