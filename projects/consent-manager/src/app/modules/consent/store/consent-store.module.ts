import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { CoreModule } from "../../../core/core.module";
import { ConsentOptionsEffects } from "./consent-options/consent-options.effects";
import { consentReducers } from "./consent.state";
import { UserConsentEffects } from "./user-consents/user-consents.effects";

@NgModule({
  imports: [
    CoreModule,
    StoreModule.forFeature("consent", consentReducers),
    EffectsModule.forFeature([
      ConsentOptionsEffects,
      UserConsentEffects,
    ])
  ],
})
export class ConsentStoreModule {}
