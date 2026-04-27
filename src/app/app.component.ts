import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, OrderListComponent, OrderFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(OrderListComponent) orderList!: OrderListComponent;

  onOrderCreated(): void {
    if (this.orderList) {
      this.orderList.loadOrders();
    }
  }
}
