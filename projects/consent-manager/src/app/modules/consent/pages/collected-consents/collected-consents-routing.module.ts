import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectedConsentsComponent } from './components/collected-consents/collected-consents.component';

const routes: Routes = [
  { path: '', component: CollectedConsentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectedConsentsRoutingModule { }
