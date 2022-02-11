import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangePageEvent } from 'projects/consent-manager/src/app/core/models/change-page-event';
import { ConsentState } from '../../../../store/consent.state';
import { getUserConsents } from '../../../../store/user-consents/user-consents.actions';
import { selectAllUserConsents, selectUserConsentsPagination, selectUserConsentsStatus } from '../../../../store/user-consents/user-consents.selectors';

@Component({
  selector: 'cm-collected-consents',
  templateUrl: './collected-consents.component.html',
  styleUrls: ['./collected-consents.component.sass']
})
export class CollectedConsentsComponent implements OnInit {

  private defaultPageSize = 2;

  public userConsents$ = this.store.select(selectAllUserConsents);
  public userConsentsPagination$ = this.store.select(selectUserConsentsPagination);
  public userConsentsStatus$ = this.store.select(selectUserConsentsStatus);

  constructor(
    private store: Store<ConsentState>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getUserConsents({ page: 1, perPage: this.defaultPageSize }));
  }

  public getUserConsentsPage(event: ChangePageEvent): void {
    this.store.dispatch(getUserConsents(event));
  }

}
