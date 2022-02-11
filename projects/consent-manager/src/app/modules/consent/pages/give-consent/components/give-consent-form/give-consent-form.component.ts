import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsentOption, UserConsent } from 'projects/consent-manager/src/app/core/models/consent';

interface ConsentOptionFormGroup {
  id: string | undefined;
  description: string;
  checked: boolean;
}

@Component({
  selector: 'cm-give-consent-form',
  templateUrl: './give-consent-form.component.html',
  styleUrls: ['./give-consent-form.component.sass']
})
export class GiveConsentFormComponent implements OnInit {

  private _consentOptions: ConsentOption[] | null = null;

  private get nameField(): FormControl {
    return this.consentForm.get('user')?.get('name') as FormControl;
  }
  private get emailField(): FormControl {
    return this.consentForm.get('user')?.get('email') as FormControl;
  }

  @Output()
  public consentFormSubmit: EventEmitter<UserConsent> = new EventEmitter();
  @Input()
  public set consentOptions(value: ConsentOption[] | null) {
    this._consentOptions = value;
    this.defineConsentOptionsFields();
  }
  @Input()
  public set userConsentStatus(value: 'idle' | 'loading' | 'success' | 'error' | null) {
    if (value === 'success') {
      this.consentForm.reset();
      this.nameField.markAsPending();
      this.emailField.markAsPending();
      this.defineConsentOptionsFields();
    }
  }
  @Input()
  public consentOptionsStatus: 'idle' | 'loading' | 'success' | 'error' | null = 'loading';

  public consentForm: FormGroup;

  get consentOptionsFields(): FormArray {
    return this.consentForm.get('givenConsents') as FormArray;
  }

  get consentOptionsGroups(): FormGroup[] {
    return this.consentOptionsFields.controls as FormGroup[];
  }

  get consentFormValue(): UserConsent {
    const consentFormValue: UserConsent = {
      user: this.consentForm.get('user')?.value,
      givenConsents: this.consentForm.get('givenConsents')?.value
        .filter((consentOption: ConsentOptionFormGroup) => consentOption.checked)
        .map((consentOption: ConsentOptionFormGroup) => {
        return {
          id: consentOption.id,
          description: consentOption.description,
        };
      })
    };
    return consentFormValue;
  }

  constructor(
    private fb: FormBuilder,
  ) {
    this.consentForm = this.fb.group({
      user: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }),
      givenConsents: this.fb.array([])
    });
  }

  ngOnInit(): void {
  }

  private defineConsentOptionsFields(): void {
    this.consentOptionsFields.clear();
    this._consentOptions?.forEach(consentOption => {
      this.consentOptionsFields.push(this.fb.group({
        id: [consentOption.id],
        description: [consentOption.description],
        checked: [false],
      }));
    });
  }

  public onConsentFormSubmit(): void {
    if (this.consentForm.valid) {
      this.consentFormSubmit.emit(this.consentFormValue);
    } else {
      this.nameField.updateValueAndValidity();
      this.emailField.updateValueAndValidity();
    }
  }

}
