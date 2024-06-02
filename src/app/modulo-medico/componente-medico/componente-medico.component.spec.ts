import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMedicoComponent } from './componente-medico.component';

describe('ComponenteMedicoComponent', () => {
  let component: ComponenteMedicoComponent;
  let fixture: ComponentFixture<ComponenteMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
