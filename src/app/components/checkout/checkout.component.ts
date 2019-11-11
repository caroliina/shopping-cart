// import { Component, OnInit } from '@angular/core';
//
// import { Product } from '../../entities/product.entity';
// import { DiscountsService } from '../../services/discounts.service';
// import { ProductService } from '../../services/product.service';
//
// @Component({
//   selector: 'checkout',
//   templateUrl: 'checkout.component.html'
// })
//
// export class CheckoutComponent implements OnInit {
//   private products: Product[];
//   private total: number;
//   private totalBeforeDiscount: number;
//   private discount: number;
//   private capDiscountName: string;
//   private shirtDiscountName: string;
//   private capDiscount: number;
//   private shirtDiscount: number;
//
//   constructor(
//     private discountsService: DiscountsService,
//     private productService: ProductService
//   ) {
//
//   }
//
//   ngOnInit() {
//     this.products = [];
//     this.capDiscountName = this.discountsService.findDiscountName('CAP');
//     this.shirtDiscountName = this.discountsService.findDiscountName('SHIRT');
//     this.total = 5000;
//     this.totalBeforeDiscount = 0;
//     this.updateCheckout();
//   }
//
//   updateCheckout(): void {
//     console.log('update');
//     this.discount = 0;
//     this.shirtDiscount = 0;
//     this.capDiscount = 0;
//
//     this.shirtDiscount = this.discountsService.checkBulkDiscountShirtPromotion();
//     this.discount += this.shirtDiscount;
//     // console.log('shirt ' + this.shirtDiscount);
//
//     this.capDiscount = this.discountsService.checkTwoForOneCapPromotion();
//     this.discount += this.capDiscount;
//     // console.log('cap ' + this.capDiscount);
//
//     this.price();
//   }
//
//   price(): void {
//     // this.total = 0;
//     // this.totalBeforeDiscount = 0;
//
//     // console.log('...');
//     this.products = this.productService.findAll();
//     for (let product of this.products) {
//       console.log(product);
//       this.total += product.price * product.quantity;
//     }
//     // console.log('total ' + this.total);
//     this.totalBeforeDiscount = this.total;
//     this.total -= this.discount;
//     // console.log('total ' + this.total);
//   }
// }
