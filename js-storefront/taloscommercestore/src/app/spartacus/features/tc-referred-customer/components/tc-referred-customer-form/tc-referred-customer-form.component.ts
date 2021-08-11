import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { DocumentIdentityType } from '../../../tc-misc/core';
import { TcMiscFacade } from '../../../tc-misc/root';
import { ReferredCustomer } from '../../core';

@Component({
  selector: 'tc-referred-customer-form',
  templateUrl: './tc-referred-customer-form.component.html',
  styleUrls: ['./tc-referred-customer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TcReferredCustomerFormComponent implements OnInit {

  @Input()
  emailReadOnly = false;

  @Input()
  showCancelBtn = true;

  @Input()
  actionBtnLabel: string;

  @Input()
  cancelBtnLabel: string;

  @Input()
  referredCustomerData: ReferredCustomer;

  @Output()
  submitReferredCustomer: EventEmitter<any> = new EventEmitter();

  @Output()
  backToReferredCustomer = new EventEmitter<any>();

  documentTypes$: Observable<DocumentIdentityType[]> = this.tcMiscFacade.getDocumentTypes();

  referredCustomerForm: FormGroup = this.fb.group({
    documentTypeCode: ['', Validators.required],
    documentNumber: ['', Validators.required],
    email: ['', [Validators.required, CustomFormValidators.emailValidator]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private tcMiscFacade: TcMiscFacade) {

  }

  ngOnInit(): void {
    if (this.referredCustomerData && Object.keys(this.referredCustomerData).length !== 0) {
      this.referredCustomerForm.patchValue(this.referredCustomerData);
    }
  }

  verifyReferredCustomer(): void {
    if (this.referredCustomerForm.valid) {
      if (this.referredCustomerForm.pristine) {
        // referred customer form value not changed
        // ignore duplicate referred customer
        this.submitReferredCustomer.emit(undefined);
      } else {
        this.submitReferredCustomer.emit(this.referredCustomerForm.value);
      }
    } else {
      this.referredCustomerForm.markAllAsTouched();
    }
  }

  back(): void {
    this.backToReferredCustomer.emit();
  }

}
