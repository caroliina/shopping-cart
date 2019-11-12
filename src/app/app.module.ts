import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { OrderSummaryComponent } from './components/shopping-cart/order-summary/order-summary.component';
import { ProductService } from './services/product.service';
import { PricingRulesService } from './services/pricing-rules.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductService,
    PricingRulesService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
