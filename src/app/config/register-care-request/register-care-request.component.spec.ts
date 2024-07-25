import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCareRequestComponent } from './register-care-request.component';

describe('RegisterCareRequestComponent', () => {
  let component: RegisterCareRequestComponent;
  let fixture: ComponentFixture<RegisterCareRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCareRequestComponent]
    });
    fixture = TestBed.createComponent(RegisterCareRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
