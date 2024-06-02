import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteBotonRetrocederContinuarComponent } from './componente-boton-retroceder-continuar.component';

describe('ComponenteBotonRetrocederContinuarComponent', () => {
  let component: ComponenteBotonRetrocederContinuarComponent;
  let fixture: ComponentFixture<ComponenteBotonRetrocederContinuarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteBotonRetrocederContinuarComponent]
    });
    fixture = TestBed.createComponent(ComponenteBotonRetrocederContinuarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
