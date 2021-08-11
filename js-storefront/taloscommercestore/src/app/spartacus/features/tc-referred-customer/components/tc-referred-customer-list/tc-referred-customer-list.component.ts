import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TcReferredCustomerFacade } from '../../root';
import { Observable } from 'rxjs';
import { ReferredCustomer } from '../../core';
import { ICON_TYPE } from '@spartacus/storefront';

@Component({
  selector: 'tc-referred-customer-list',
  templateUrl: './tc-referred-customer-list.component.html',
  styleUrls: ['./tc-referred-customer-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TcReferredCustomerListComponent implements OnInit {
  iconTypes = ICON_TYPE;
  referredCustomers$: Observable<ReferredCustomer[]> = this.tcReferredCustomerFacade.getReferredCustomers(true);
  loading$: Observable<boolean> = this.tcReferredCustomerFacade.getReferredCustomersResultLoading();
  success$: Observable<boolean> = this.tcReferredCustomerFacade.getReferredCustomersResultSuccess();
  error$: Observable<boolean> = this.tcReferredCustomerFacade.getReferredCustomersResultError();
  showAddReferredCustomerForm: boolean = false;
  showEditReferredCustomerForm: boolean = false;
  currentReferredCustomer: ReferredCustomer;

  constructor(protected tcReferredCustomerFacade: TcReferredCustomerFacade) {}

  ngOnInit(): void {}

  handleEditReferredCustomerAction(referredCustomer: ReferredCustomer): void {
    this.showEditReferredCustomerForm = true;
    this.showAddReferredCustomerForm = false;
    this.currentReferredCustomer = referredCustomer;
  }

  handleAddReferredCustomerAction(): void {
    this.showEditReferredCustomerForm = false;
    this.showAddReferredCustomerForm = true;
  }

  editReferredCustomerCancel(): void {
    this.showEditReferredCustomerForm = false;
    this.showAddReferredCustomerForm = false;
  }

  addReferredCustomerSubmit(referredCustomer: ReferredCustomer): void {
    this.showAddReferredCustomerForm = false;
    this.tcReferredCustomerFacade.addReferredCustomer(referredCustomer);
  }

  editReferredCustomerSubmit(referredCustomer: ReferredCustomer): void {
    this.showEditReferredCustomerForm = false;
    this.tcReferredCustomerFacade.updateReferredCustomer(this.currentReferredCustomer.email, referredCustomer);
  }


}
