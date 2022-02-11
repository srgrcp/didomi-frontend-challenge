import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectedConsentsRoutingModule } from './collected-consents-routing.module';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';
import { ConsentStoreModule } from '../../store/consent-store.module';
import { CollectedConsentsTableComponent } from './components/collected-consents-table/collected-consents-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    CollectedConsentsComponent,
    CollectedConsentsTableComponent,
  ],
  imports: [
    CommonModule,
    CollectedConsentsRoutingModule,
    ConsentStoreModule,
    NgxSkeletonLoaderModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class CollectedConsentsModule { }
