import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Modularized state management.
    // see app/modules/consent/store/
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),

    // Global configuration for animated skeleton loaders.
    NgxSkeletonLoaderModule.forRoot({
      animation: 'progress-dark',
      theme: {
        'background-color': '#777',
        'margin-bottom': '5px',
      },
    }),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
