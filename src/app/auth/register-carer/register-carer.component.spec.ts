import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCarerComponent } from './register-carer.component';

describe('RegisterCarerComponent', () => {
  let component: RegisterCarerComponent;
  let fixture: ComponentFixture<RegisterCarerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterCarerComponent]
    });
    fixture = TestBed.createComponent(RegisterCarerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
