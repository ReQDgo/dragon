import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConfirmacionComponent } from './componente-confirmacion.component';

describe('ComponenteConfirmacionComponent', () => {
  let component: ComponenteConfirmacionComponent;
  let fixture: ComponentFixture<ComponenteConfirmacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteConfirmacionComponent]
    });
    fixture = TestBed.createComponent(ComponenteConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
