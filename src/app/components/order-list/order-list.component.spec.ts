import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderListComponent } from './order-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('OrderListComponent', () => {
  let component: OrderListComponent;
  let fixture: ComponentFixture<OrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderListComponent, FormsModule, CommonModule],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have initial empty orders', () => {
    expect(component.orders).toEqual([]);
  });

  it('should filter orders correctly', () => {
    component.orders = [
      {
        id: 1,
        customerName: 'Ana',
        product: 'Laptop',
        quantity: 3,
        status: 'NEW',
        createdAt: '2026-04-27T14:00:00'
      },
      {
        id: 2,
        customerName: 'Carlos',
        product: 'Mouse',
        quantity: 1,
        status: 'PROCESSED',
        createdAt: '2026-04-27T14:00:00'
      }
    ];
    component.selectedStatus = 'NEW';
    component.applyFilter();

    expect(component.filteredOrders.length).toBe(1);
    expect(component.filteredOrders[0].status).toBe('NEW');
  });
});
