import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedConsentsTableComponent } from './collected-consents-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { ChangePageEvent } from 'projects/consent-manager/src/app/core/models/change-page-event';

describe('CollectedConsentsTableComponent', () => {
  let component: CollectedConsentsTableComponent;
  let fixture: ComponentFixture<CollectedConsentsTableComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectedConsentsTableComponent ],
      imports: [
        NgxSkeletonLoaderModule,
        MatTableModule,
        MatPaginatorModule,
      ]
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedConsentsTableComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paginator work', async () => {
    const paginator = await loader.getHarness(MatPaginatorHarness);
    component.userConsentsPagination = {
      page: 1,
      perPage: 2,
      total: 100,
      totalPages: 50,
    };
    fixture.detectChanges();
    expect(paginator.host()).toBeTruthy();
    
    let selectedPage = 0;
    component.changePage.subscribe((pageEvent: ChangePageEvent) => {
      selectedPage = pageEvent.page;
    })
    await paginator.goToLastPage();
    expect(selectedPage).toBe(50);
  })
});
