import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveConsentFormComponent } from './give-consent-form.component';

describe('GiveConsentFormComponent', () => {
  let component: GiveConsentFormComponent;
  let fixture: ComponentFixture<GiveConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveConsentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
