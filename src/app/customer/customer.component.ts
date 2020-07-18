import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'cm-orders',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

    // displayMode: CustomerDisplayModeEnum;
    // displayModeEnum = CustomerDisplayModeEnum;

    allowAddOrder: boolean = false;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {

      // No longer needed due to routerLinkActive feature in Angular
      // const path = this.router.url.split('/')[3];
      // switch (path) {
      //   case 'details':
      //     this.displayMode = CustomerDisplayModeEnum.Details;
      //     break;
      //   case 'orders':
      //     this.displayMode = CustomerDisplayModeEnum.Orders;
      //     break;
      //   case 'edit':
      //     this.displayMode = CustomerDisplayModeEnum.Edit;
      //     break;
      // }

      this.route.parent.params.subscribe((params: Params) => {
        const id = +params['id'];
        if (id !== 0) {
          this.allowAddOrder = true;
        } else {
          this.allowAddOrder = false;
        }
      });

    }

}

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }
