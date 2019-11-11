import { Component, OnInit } from '@angular/core';

import { Product } from '../../entities/product.entity';
// import { CheckoutComponent } from '../checkout/checkout.component';
import { DiscountsService } from '../../services/discounts.service';
import { ProductService } from '../../services/product.service';

class Checkout implements OnInit {
  private scannedProducts: Product[];
  private total: number;
  private totalBeforeDiscount: number;
  private discount: number;
  private capDiscountName: string;
  private shirtDiscountName: string;
  private capDiscount: number;
  private shirtDiscount: number;

  constructor(
    private discountsService: DiscountsService,
    private productService: ProductService
  ) {
    this.scannedProducts = [];
  }

  ngOnInit() {
    this.scannedProducts = [];
    this.updateCheckout();
  }

  scan(product: Product): void {
    console.log(product);

    this.scannedProducts.push(product);
    console.log('scanned ' + this.scannedProducts);
  }

  remove(product: Product): void {
    this.scannedProducts = this.scannedProducts.filter(p => p !== product);
    console.log('scanned ' + this.scannedProducts);
  }

  updateCheckout(): number {
    console.log('update');
    this.discount = 0;
    this.shirtDiscount = 0;
    this.capDiscount = 0;

    if (this.scannedProducts.length > 0) {
      this.shirtDiscount = this.discountsService.checkBulkDiscountShirtPromotion(this.scannedProducts);
      this.discount += this.shirtDiscount;

      this.capDiscount = this.discountsService.checkTwoForOneCapPromotion(this.scannedProducts);
      this.discount += this.capDiscount;
    }
    return this.price();
  }

  price(): number {
    this.total = 0;
    this.totalBeforeDiscount = 0;

    for (let product of this.scannedProducts) {
      this.total += product.price * product.quantity;
    }
    this.totalBeforeDiscount = this.total;
    this.total -= this.discount;

    return this.total;
  }

}

@Component({
  selector: 'product',
  templateUrl: 'product.component.html'
})

export class ProductComponent implements OnInit {
  private products: Product[];
  private total: number;
  // private totalBeforeDiscount: number;
  // private discount: number;
  // private capDiscountName: string;
  // private shirtDiscountName: string;
  // private capDiscount: number;
  // private shirtDiscount: number;
  private checkOut: Checkout;

  constructor(
    private productService: ProductService,
    private discountsService: DiscountsService
    // private checkout: CheckoutComponent
  ) { }

  ngOnInit() {
    this.capDiscountName = this.discountsService.findDiscountName('CAP');
    this.shirtDiscountName = this.discountsService.findDiscountName('SHIRT');
    this.total = 0;
    this.loadCart();
  }

  loadCart(): void {
    this.products = [];
    this.products = this.productService.findAll();
    this.checkOut = new Checkout(this.discountsService, this.productService)
  }

  decrease(product: Product): void {
    if (product.quantity >= 1) {
      product.quantity -= 1;
      this.checkOut.scan(product);
      this.total = this.checkOut.updateCheckout();
    }
    // this.checkout.ngOnInit();
  }

  increase(product: Product): void {
    product.quantity += 1;
    this.checkOut.remove(product);
    this.total = this.checkOut.updateCheckout();
    // this.checkout.ngOnInit();
  }
}
