import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CanActivateGuard } from './guards/can-activate.guard';
import { CanDeactivateGuard } from './guards/can-deactivate.guard';
import { CustomerOrderEditComponent } from './customer-order-edit/customer-order-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      { path: 'orders', component: CustomerOrdersComponent },
      { path: 'details', component: CustomerDetailsComponent },
      {
        path: 'edit',
        component: CustomerEditComponent,
        canActivate: [CanActivateGuard],
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: 'order-edit',
        component: CustomerOrderEditComponent,
        canActivate: [CanActivateGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, CanDeactivateGuard]
})
export class CustomerRoutingModule {
  static components = [CustomerComponent, CustomerOrdersComponent, CustomerDetailsComponent, CustomerEditComponent];
}

