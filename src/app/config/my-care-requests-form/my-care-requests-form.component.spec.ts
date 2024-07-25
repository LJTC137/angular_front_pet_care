import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCareRequestsFormComponent } from './my-care-requests-form.component';

describe('MyCareRequestsFormComponent', () => {
  let component: MyCareRequestsFormComponent;
  let fixture: ComponentFixture<MyCareRequestsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCareRequestsFormComponent]
    });
    fixture = TestBed.createComponent(MyCareRequestsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
