import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedConsentsComponent } from './collected-consents.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CollectedConsentsTableComponent } from '../collected-consents-table/collected-consents-table.component';
import { ConsentStoreModule } from '../../../../store/consent-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Registry, Server } from 'miragejs';
import { AnyFactories, ModelDefinition } from 'miragejs/-types';
// @ts-ignore
import { startFakeServer } from 'projects/consent-manager/src/app/fake-server/fake-server';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatPaginatorHarness } from '@angular/material/paginator/testing';
import { UserConsent } from 'projects/consent-manager/src/app/core/models/consent';
import { firstValueFrom } from 'rxjs';

describe('CollectedConsentsComponent', () => {
  let component: CollectedConsentsComponent;
  let fixture: ComponentFixture<CollectedConsentsComponent>;
  let loader: HarnessLoader;
  let fakeServer: Server<Registry<{
    consentOptions: ModelDefinition<{}>;
    userConsent: ModelDefinition<{}>;
  }, AnyFactories>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CollectedConsentsComponent,
        CollectedConsentsTableComponent,
      ],
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        ConsentStoreModule,
        NgxSkeletonLoaderModule,
        MatTableModule,
        MatPaginatorModule,
      ]
    })
    .compileComponents();
    fakeServer = startFakeServer();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedConsentsComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);
    fixture.detectChanges();
  });

  afterEach(() => {
    fakeServer.shutdown();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get second page', async () => {
    const paginator = await loader.getHarness(MatPaginatorHarness);
    let firstPageContent: UserConsent[] = [];
    let secondPageContent: UserConsent[] = [];

    firstPageContent = await firstValueFrom(component.userConsents$);
    await paginator.goToNextPage();
    secondPageContent = await firstValueFrom(component.userConsents$);

    expect(firstPageContent.length).toBeTruthy();
    expect(secondPageContent.length).toBeTruthy();
    expect(firstPageContent).not.toEqual(secondPageContent);
  })
});
