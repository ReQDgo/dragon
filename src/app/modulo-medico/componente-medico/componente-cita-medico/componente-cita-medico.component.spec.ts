import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCitaMedicoComponent } from './componente-cita-medico.component';

describe('ComponenteCitaMedicoComponent', () => {
  let component: ComponenteCitaMedicoComponent;
  let fixture: ComponentFixture<ComponenteCitaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCitaMedicoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCitaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
