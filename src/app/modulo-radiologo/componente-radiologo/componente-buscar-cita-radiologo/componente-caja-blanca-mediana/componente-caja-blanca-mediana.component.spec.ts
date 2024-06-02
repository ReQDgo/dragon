import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponenteCajaBlancaMedianaComponent } from './componente-caja-blanca-mediana.component';

describe('ComponenteCajaBlancaMedianaComponent', () => {
  let component: ComponenteCajaBlancaMedianaComponent;
  let fixture: ComponentFixture<ComponenteCajaBlancaMedianaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCajaBlancaMedianaComponent]
    });
    fixture = TestBed.createComponent(ComponenteCajaBlancaMedianaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
