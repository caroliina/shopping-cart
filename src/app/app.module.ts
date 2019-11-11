import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { DiscountsService } from './services/discounts.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // CheckoutComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    DiscountsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
