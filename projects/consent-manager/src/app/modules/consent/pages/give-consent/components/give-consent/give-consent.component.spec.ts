import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveConsentComponent } from './give-consent.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ConsentStoreModule } from '../../../../store/consent-store.module';
import { GiveConsentFormComponent } from '../give-consent-form/give-consent-form.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// @ts-ignore
import { startFakeServer } from 'projects/consent-manager/src/app/fake-server/fake-server';
import { Registry, Server } from 'miragejs';
import { AnyFactories, ModelDefinition } from 'miragejs/-types';
import { firstValueFrom, lastValueFrom, takeWhile } from 'rxjs';

describe('GiveConsentComponent', () => {
  let component: GiveConsentComponent;
  let fixture: ComponentFixture<GiveConsentComponent>;
  let fakeServer: Server<Registry<{
    consentOptions: ModelDefinition<{}>;
    userConsent: ModelDefinition<{}>;
  }, AnyFactories>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GiveConsentComponent,
        GiveConsentFormComponent,
      ],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        ConsentStoreModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        NgxSkeletonLoaderModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCheckboxModule,
      ]
    })
    .compileComponents();
    fakeServer = startFakeServer();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fakeServer.shutdown();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load consent options', async () => {
    // Wait for the consent options to be loaded
    await lastValueFrom(component.consentOptionsStatus$.pipe(takeWhile(s => s !== 'success')));

    const consentOptions = await firstValueFrom(component.consentOptions$);

    expect(consentOptions).toBeTruthy();
    expect(consentOptions.length).toBe(3);
    expect(consentOptions[0].description).toBe('Receive newsletter');
  });
});
