import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GiveConsentRoutingModule } from './give-consent-routing.module';
import { GiveConsentComponent } from './components/give-consent/give-consent.component';
import { GiveConsentFormComponent } from './components/give-consent-form/give-consent-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    GiveConsentComponent,
    GiveConsentFormComponent
  ],
  imports: [
    CommonModule,
    GiveConsentRoutingModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
  ]
})
export class GiveConsentModule { }
