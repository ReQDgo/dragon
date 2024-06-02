import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCajaDiagnosticoComponent } from './componente-caja-diagnostico.component';

describe('ComponenteCajaDiagnosticoComponent', () => {
  let component: ComponenteCajaDiagnosticoComponent;
  let fixture: ComponentFixture<ComponenteCajaDiagnosticoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCajaDiagnosticoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCajaDiagnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
