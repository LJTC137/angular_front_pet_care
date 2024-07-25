import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCareRequestsComponent } from './my-care-requests.component';

describe('MyCareRequestsComponent', () => {
  let component: MyCareRequestsComponent;
  let fixture: ComponentFixture<MyCareRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCareRequestsComponent]
    });
    fixture = TestBed.createComponent(MyCareRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
