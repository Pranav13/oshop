import { AuthGuard } from './../shared/services/auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './component/products/products.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './component/check-out/check-out.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { MyOrderComponent } from './component/my-order/my-order.component';
import { ProductFilterComponent } from './component/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './component/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './component/shipping-form/shipping-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'product', component: ProductsComponent },
      {path: 'shopping-cart', component: ShoppingCartComponent },
      {path: 'check-out', component: CheckOutComponent , canActivate: [AuthGuard] },
      {path: 'order-success/:id', component: OrderSuccessComponent , canActivate: [AuthGuard] },
      {path:'my/orders', component:MyOrderComponent , canActivate: [AuthGuard] },
    ])
  ],
  declarations: [
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ]
})
export class ShoppingModule { }
