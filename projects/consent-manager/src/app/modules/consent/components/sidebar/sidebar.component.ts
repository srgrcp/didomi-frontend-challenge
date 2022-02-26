import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'cm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  private mdBreakpoint = '(max-width: 767px)';

  @ViewChild(MatDrawer)
  sidenav: MatDrawer | undefined;
  opened$ = new BehaviorSubject(true);
  mode$ = new BehaviorSubject<MatDrawerMode>('side');

  constructor(private breakpointObserver: BreakpointObserver) { }
  
  ngOnInit(): void {
    // Handle the change of the screen size.
    this.breakpointObserver.observe(this.mdBreakpoint).subscribe((res) => {
      if (this.sidenav) {
        if (res.matches) {
          this.mode$.next('push');
          this.opened$.next(false);
        } else {
          this.mode$.next('side');
          this.opened$.next(true);
        }
      }
    });

    // Set initial responsive mode.
    if (this.breakpointObserver.isMatched(this.mdBreakpoint)) {
      this.mode$.next('push');
      this.opened$.next(false);
    }
  }

  toggle() {
    this.opened$.next(!this.opened$.value);
  }

  openChaned(opened: boolean) {
    this.opened$.next(opened);
  }

}
