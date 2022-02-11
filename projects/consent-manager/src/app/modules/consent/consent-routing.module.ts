import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
    children: [
      { path: '', redirectTo: 'give-consent', pathMatch: 'full' },
      { path: 'give-consent', loadChildren: () => import('./pages/give-consent/give-consent.module').then(m => m.GiveConsentModule) },
      { path: 'collected-consents', loadChildren: () => import('./pages/collected-consents/collected-consents.module').then(m => m.CollectedConsentsModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsentRoutingModule { }
