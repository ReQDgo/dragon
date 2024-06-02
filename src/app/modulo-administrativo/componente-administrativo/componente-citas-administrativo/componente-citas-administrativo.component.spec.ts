import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteCitasAdministrativoComponent } from './componente-citas-administrativo.component';

describe('ComponenteCitasAdministrativoComponent', () => {
  let component: ComponenteCitasAdministrativoComponent;
  let fixture: ComponentFixture<ComponenteCitasAdministrativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponenteCitasAdministrativoComponent]
    });
    fixture = TestBed.createComponent(ComponenteCitasAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
