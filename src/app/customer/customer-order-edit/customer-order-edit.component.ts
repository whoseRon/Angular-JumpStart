import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';

import { IOrder } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/services/data.service';
import { GrowlerService } from 'src/app/core/growler/growler.service';
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

  @ViewChild('orderForm', { static: true }) orderForm: NgForm;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService,
    private growler: GrowlerService,
    private modalService: ModalService,
    private logger: LoggerService) { }

  ngOnInit(): void {
    this.userId = this.route.parent.params['id'];
  }

  cancel(event: Event) {
    event.preventDefault();
    // Route guard will take care of showing modal dialog service if data is dirty
    this.router.navigate(['/customers']);
  }

}
