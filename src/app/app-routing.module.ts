import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { DeleteComponent } from './delete/delete.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductViewComponent } from './shop/product-view.component';
import { ShopComponent } from './shop/shop.component';
import { UserAddressComponent } from './user-address/user-address.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component:ShopComponent },
  {path:'Cart',component:CartComponent},
  {path:'Home',component:ShopComponent},
  {path:'view/:id',component:ProductViewComponent},
  {path:'main',component:HomeComponent},
  {path:'bill',component:BillComponent},
  {path:'orders',component:OrdersComponent},
  {path:'address',component:UserAddressComponent},
  {path:'delete',component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
