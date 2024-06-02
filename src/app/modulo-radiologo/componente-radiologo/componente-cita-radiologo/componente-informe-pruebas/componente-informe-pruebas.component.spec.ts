import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteInformePruebasComponent } from './componente-informe-pruebas.component';

describe('ComponenteInformePruebasComponent', () => {
  let component: ComponenteInformePruebasComponent;
  let fixture: ComponentFixture<ComponenteInformePruebasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteInformePruebasComponent]
    });
    fixture = TestBed.createComponent(ComponenteInformePruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
