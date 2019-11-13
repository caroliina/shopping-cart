import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OrderSummaryComponent } from './order-summary.component';
import { AppModule } from '../../../app.module';

describe('OrderSummaryComponent', () => {
  let component: OrderSummaryComponent;
  let fixture: ComponentFixture<OrderSummaryComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(OrderSummaryComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Order summary'`, () => {
    element = fixture.nativeElement.querySelector('h1');
    fixture.detectChanges();
    expect(element.textContent).toContain('Order summary');
  });

  it('should include three discounts', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const discounts = fixture.debugElement.queryAll(By.css('.discount'));
      expect(discounts[0].nativeElement.textContent.trim()).toBe('Cap 2-for-1 promotion');
      expect(discounts[1].nativeElement.textContent.trim()).toBe('T-Shirt bulk discount');
      expect(discounts[2].nativeElement.textContent.trim()).toBe('Mug discount');
    })
  });

});
