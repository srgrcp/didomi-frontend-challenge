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

  /**
   * Get all consent types to be displayed as options in the give consent form.
   * @returns Consent types.
   */
  getConsentOptions(): Observable<Response<ConsentOption[]>> {
    return this.http.get<Response<ConsentOption[]>>('/consent-options');
  }

  /**
   * Persist a user with its given consent.
   * @param userConsentsRequest User with given consents to be saved.
   * @returns UserConsent with its id.
   */
  saveUserConsents(userConsentsRequest: UserConsent): Observable<Response<UserConsent>> {
    return this.http.post<Response<UserConsent>>('/consents', userConsentsRequest);
  }

  /**
   * Get a page of user consents.
   * @param page Page number.
   * @param perPage Results per page.
   * @returns A paginated list of user consents.
   */
  getUserConsents(page: number, perPage: number): Observable<Response<Paginated<UserConsent>>> {
    return this.http.get<Response<Paginated<UserConsent>>>(`/consents?page=${page}&perPage=${perPage}`);
  }

}
