import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraPadreComponent } from './barra-padre.component';

describe('BarraPadreComponent', () => {
  let component: BarraPadreComponent;
  let fixture: ComponentFixture<BarraPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarraPadreComponent]
    });
    fixture = TestBed.createComponent(BarraPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
