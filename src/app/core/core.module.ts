import { SharedModule } from './../shared/shared.module';
import { ShoppingModule } from './../shopping/shopping.module';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BsNavbarComponent } from './components/bs-navbar/bs-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from 'app/shopping/component/products/products.component';


@NgModule({
  imports: [
   SharedModule,
    RouterModule.forChild([ ])
  ],
  declarations: [ 
    BsNavbarComponent,
    HomeComponent,
    LoginComponent,
  ],
  exports:[
    BsNavbarComponent
  ]
})
export class CoreModule { }
