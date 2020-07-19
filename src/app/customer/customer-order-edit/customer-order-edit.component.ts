import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IOrder, ICustomer } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/services/data.service';
import { GrowlerService, GrowlerMessageType } from 'src/app/core/growler/growler.service';
import { ModalService } from 'src/app/core/modal/modal.service';
import { LoggerService } from 'src/app/core/services/logger.service';

@Component({
  selector: 'cm-customer-order-edit',
  templateUrl: './customer-order-edit.component.html',
  styleUrls: ['./customer-order-edit.component.css']
})
export class CustomerOrderEditComponent implements OnInit {

  order: IOrder = {
    productName: '',
    itemCost: 0
  };
  userId: number;
  customer: ICustomer;
  errorMessage: string;

  @ViewChild('orderForm', { static: true }) orderForm: NgForm;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private growler: GrowlerService,
    private logger: LoggerService) { }

  ngOnInit(): void {
    this.userId = +this.route.parent.snapshot.params['id'];
    this.getCustomer(this.userId);
  }

  getCustomer(id: number) {
    this.dataService.getCustomer(id).subscribe((customer: ICustomer) => {
      this.customer = customer;
    });
  }

  submit() {
    this.customer.orders.push(this.order);
      this.dataService.updateCustomer(this.customer)
        .subscribe((status: boolean) => {
          if (status) {
            this.growler.growl('Operation performed successfully.', GrowlerMessageType.Success);
            this.router.navigate([`/customers/${this.userId}/orders`]);
          } else {
            const msg = 'Unable to add order to user';
            this.growler.growl(msg, GrowlerMessageType.Danger);
            this.errorMessage = msg;
          }
        },
          (err: any) => this.logger.log(err));
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate([`/customers/${this.userId}/orders`]);
  }

}
