import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const shopRoutes: Routes = [
  {path: '', component: ShopComponent},
  {path: ':id', component: ProductDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(shopRoutes)
  ],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
