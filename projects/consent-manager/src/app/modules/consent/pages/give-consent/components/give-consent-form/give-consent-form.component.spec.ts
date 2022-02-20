import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveConsentFormComponent } from './give-consent-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GiveConsentFormComponent', () => {
  let component: GiveConsentFormComponent;
  let fixture: ComponentFixture<GiveConsentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiveConsentFormComponent ],
      imports: [
        BrowserAnimationsModule,
        NgxSkeletonLoaderModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
      ]
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
