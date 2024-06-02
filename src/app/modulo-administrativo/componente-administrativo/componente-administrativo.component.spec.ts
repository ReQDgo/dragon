import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAdministrativoComponent } from './componente-administrativo.component';

describe('ComponenteAdministrativoComponent', () => {
  let component: ComponenteAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
