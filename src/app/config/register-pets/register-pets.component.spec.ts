import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPetsComponent } from './register-pets.component';

describe('RegisterPetsComponent', () => {
  let component: RegisterPetsComponent;
  let fixture: ComponentFixture<RegisterPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterPetsComponent]
    });
    fixture = TestBed.createComponent(RegisterPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
