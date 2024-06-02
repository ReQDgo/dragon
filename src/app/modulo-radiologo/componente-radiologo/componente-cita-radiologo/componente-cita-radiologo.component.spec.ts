import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCitaRadiologoComponent } from './componente-cita-radiologo.component';

describe('ComponenteCitaRadiologoComponent', () => {
  let component: ComponenteCitaRadiologoComponent;
  let fixture: ComponentFixture<ComponenteCitaRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCitaRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCitaRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
