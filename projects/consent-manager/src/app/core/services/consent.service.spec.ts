import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConsentService } from './consent.service';
import { Response } from '../models/response';
import { ConsentOption, UserConsent } from '../models/consent';
import { validate as validateUuid } from 'uuid';
import { Paginated } from '../models/paginated';
// @ts-ignore
import { startFakeServer } from '../../fake-server/fake-server';
import { Server, Registry } from 'miragejs'
import { AnyFactories, ModelDefinition } from 'miragejs/-types';

describe('ConsentService', () => {
  let service: ConsentService;
  let fakeServer: Server<Registry<{
    consentOptions: ModelDefinition<{}>;
    userConsent: ModelDefinition<{}>;
  }, AnyFactories>>;
  const userConsentsRequest: UserConsent = {
    user: {
      name: 'Sergio Carrillo',
      email: 'srgrcp@gmail.com',
    },
    givenConsents: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        description: 'Receive newsletter',
      },
      {
        id: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        description: 'Be shown targeted ads',
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        ConsentService,
      ]
    });
    service = TestBed.inject(ConsentService);
    fakeServer = startFakeServer();
  });

  afterEach(() => {
    fakeServer.shutdown();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getConsentOptions should return consent options', (done: DoneFn) => {
    service.getConsentOptions().subscribe((response: Response<ConsentOption[]>) => {
      expect(response.data).toBeTruthy();
      expect(response.data.length).toBe(3);
      done();
    });
  });

  it('#saveUserConsents should save user consents', (done: DoneFn) => {
    service.saveUserConsents(userConsentsRequest).subscribe((response: Response<UserConsent>) => {
      expect(response.data).toBeTruthy();
      expect(validateUuid(response.data.id || '')).toBe(true);
      expect(response.data.givenConsents.length).toBe(2);
      done();
    });
  });

  it('#getUserConsents should get user consents with pagination', (done: DoneFn) => {
    const page = 1;
    const perPage = 2;
    service.getUserConsents(page, perPage).subscribe((response: Response<Paginated<UserConsent>>) => {
      expect(response.data).toBeTruthy();
      expect(response.data.pagination.total).toBe(4);
      expect(response.data.pagination.perPage).toBe(2);
      expect(response.data.pagination.page).toBe(page);
      expect(response.data.data.length).toBe(perPage);
      done();
    });
  });
});
