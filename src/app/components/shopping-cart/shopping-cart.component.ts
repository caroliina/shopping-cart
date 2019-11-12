import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entity';
import { PricingRule } from '../../entities/pricing-rule.entity';
import { ProductService } from '../../services/product.service';
import { PricingRulesService } from '../../services/pricing-rules.service';
import { Checkout } from '../../classes/checkout/checkout'

@Component({
  selector: 'shopping-cart',
  templateUrl: 'shopping-cart.component.html'
})

export class ShoppingCartComponent implements OnInit {
  products: Product[];
  values = {
    total: 0,
    discount: 0
  }
  private checkOut: Checkout;
  private pricingRules: PricingRule[];

  constructor(
    private productService: ProductService,
    private pricingRulesService: PricingRulesService
  ) { }

  ngOnInit() {
    this.products = this.productService.findAll();
    this.pricingRules = this.pricingRulesService.getPricingRules();
    this.checkOut = new Checkout(this.pricingRules);
  }

  decrease(product: Product): void {
    if (product.quantity >= 1) {
      product.quantity -= 1;
      this.checkOut.scan(product);
      this.values = { ...this.checkOut.total() };
    }
  }

  increase(product: Product): void {
    product.quantity += 1;
    this.checkOut.scan(product);
    this.values = { ...this.checkOut.total() };
  }
}
