import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ChangePageEvent } from 'projects/consent-manager/src/app/core/models/change-page-event';
import { UserConsent } from 'projects/consent-manager/src/app/core/models/consent';
import { Pagination } from 'projects/consent-manager/src/app/core/models/paginated';

@Component({
  selector: 'cm-collected-consents-table',
  templateUrl: './collected-consents-table.component.html',
  styleUrls: ['./collected-consents-table.component.sass']
})
export class CollectedConsentsTableComponent implements OnInit {

  @Input()
  userConsents: UserConsent[] | null | undefined;
  public loadingData: any[] = [{},{}];
  @Input()
  userConsentsPagination: Pagination | null | undefined;
  @Input()
  public userConsentsStatus: 'idle' | 'loading' | 'success' | 'error' | null = 'loading';
  @Output()
  public changePage = new EventEmitter<ChangePageEvent>();

  public displayedColumns: string[] = ['name', 'email', 'consents'];

  constructor() { }

  ngOnInit(): void {
  }

  public pageChanged(event: PageEvent): void {
    this.changePage.emit({ page: event.pageIndex + 1, perPage: event.pageSize });
  }

}
