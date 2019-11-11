import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { CartComponent } from './components/cart/cart.component';
// import { ProductComponent } from './components/product/product.component';
import { AppComponent } from './app.component';


const routes: Routes = [
	{ path: 'app', component: AppComponent },
	// { path: 'product', component: ProductComponent },
	// { path: 'cart', component: CartComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
