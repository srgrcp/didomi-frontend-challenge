import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsentRoutingModule } from './consent-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ConsentStoreModule } from './store/consent-store.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ConsentRoutingModule,
    ConsentStoreModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class ConsentModule { }
