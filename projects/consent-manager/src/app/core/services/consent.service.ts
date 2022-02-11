import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConsentOption, UserConsent } from '../models/consent';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { Response } from '../models/response';
import { Paginated } from '../models/paginated';

@Injectable({
  providedIn: CoreModule
})
export class ConsentService {

  constructor(
    private http: HttpClient,
  ) { }

  getConsentOptions(): Observable<Response<ConsentOption[]>> {
    return this.http.get<Response<ConsentOption[]>>('/consent-options');
  }

  saveUserConsents(userConsentsRequest: UserConsent): Observable<Response<UserConsent>> {
    return this.http.post<Response<UserConsent>>('/consents', userConsentsRequest);
  }

  getUserConsents(page: number, perPage: number): Observable<Response<Paginated<UserConsent>>> {
    return this.http.get<Response<Paginated<UserConsent>>>(`/consents?page=${page}&perPage=${perPage}`);
  }

}
