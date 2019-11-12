import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'order-summary',
  templateUrl: 'order-summary.component.html'
})

export class OrderSummaryComponent implements OnChanges {
  @Input() values: any;
  @Input() pricingRules: any;

  ngOnChanges(changes: SimpleChanges) {
    this.values = changes.values.currentValue;
  }
}
