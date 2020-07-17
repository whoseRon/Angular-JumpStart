import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerOrderEditComponent } from './customer-order-edit/customer-order-edit.component';

@NgModule({
  imports: [CustomerRoutingModule, SharedModule],
  declarations: [CustomerRoutingModule.components, CustomerOrderEditComponent]
})
export class CustomerModule { }
