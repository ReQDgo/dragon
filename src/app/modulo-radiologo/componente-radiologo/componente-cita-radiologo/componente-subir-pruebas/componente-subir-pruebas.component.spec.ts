import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteSubirPruebasComponent } from './componente-subir-pruebas.component';

describe('ComponenteSubirPruebasComponent', () => {
  let component: ComponenteSubirPruebasComponent;
  let fixture: ComponentFixture<ComponenteSubirPruebasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteSubirPruebasComponent]
    });
    fixture = TestBed.createComponent(ComponenteSubirPruebasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
