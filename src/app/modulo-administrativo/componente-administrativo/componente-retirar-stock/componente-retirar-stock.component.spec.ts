import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRetirarStockComponent } from './componente-retirar-stock.component';

describe('ComponenteRetirarStockComponent', () => {
  let component: ComponenteRetirarStockComponent;
  let fixture: ComponentFixture<ComponenteRetirarStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteRetirarStockComponent]
    });
    fixture = TestBed.createComponent(ComponenteRetirarStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
