import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserConsent } from 'projects/consent-manager/src/app/core/models/consent';
import { getConsentOptions } from '../../../../store/consent-options/consent-options.actions';
import { selectAllConsentOptions, selectConsentOptionsStatus } from '../../../../store/consent-options/consent-options.selectors';
import { ConsentState } from '../../../../store/consent.state';
import { saveUserConsents } from '../../../../store/user-consents/user-consents.actions';
import { selectUserConsentsStatus } from '../../../../store/user-consents/user-consents.selectors';

@Component({
  selector: 'cm-give-consent',
  templateUrl: './give-consent.component.html',
  styleUrls: ['./give-consent.component.sass']
})
export class GiveConsentComponent implements OnInit {

  public consentOptions$ = this.store.select(selectAllConsentOptions);
  public consentOptionsStatus$ = this.store.select(selectConsentOptionsStatus);
  public userConsentStatus$ = this.store.select(selectUserConsentsStatus);

  constructor(
    private store: Store<ConsentState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getConsentOptions());
  }

  public onConsentFormSubmit(consentForm: UserConsent): void {
    this.store.dispatch(saveUserConsents({ userConsents: consentForm }));
  }

}
