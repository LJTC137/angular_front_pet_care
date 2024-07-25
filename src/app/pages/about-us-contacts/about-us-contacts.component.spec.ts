import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsContactsComponent } from './about-us-contacts.component';

describe('AboutUsContactsComponent', () => {
  let component: AboutUsContactsComponent;
  let fixture: ComponentFixture<AboutUsContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsContactsComponent]
    });
    fixture = TestBed.createComponent(AboutUsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
