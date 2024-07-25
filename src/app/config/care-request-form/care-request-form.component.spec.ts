import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareRequestFormComponent } from './care-request-form.component';

describe('CareRequestFormComponent', () => {
  let component: CareRequestFormComponent;
  let fixture: ComponentFixture<CareRequestFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareRequestFormComponent]
    });
    fixture = TestBed.createComponent(CareRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
