import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveConsentComponent } from './components/give-consent/give-consent.component';

const routes: Routes = [
  { path: '', component: GiveConsentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GiveConsentRoutingModule { }
