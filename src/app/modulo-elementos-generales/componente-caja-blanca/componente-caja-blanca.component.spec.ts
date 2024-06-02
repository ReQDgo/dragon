import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCajaBlancaComponent } from './componente-caja-blanca.component';

describe('ComponenteCajaBlancaComponent', () => {
  let component: ComponenteCajaBlancaComponent;
  let fixture: ComponentFixture<ComponenteCajaBlancaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCajaBlancaComponent]
    });
    fixture = TestBed.createComponent(ComponenteCajaBlancaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
