import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRadiologoComponent } from './componente-radiologo.component';

describe('ComponenteRadiologoComponent', () => {
  let component: ComponenteRadiologoComponent;
  let fixture: ComponentFixture<ComponenteRadiologoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteRadiologoComponent]
    });
    fixture = TestBed.createComponent(ComponenteRadiologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
