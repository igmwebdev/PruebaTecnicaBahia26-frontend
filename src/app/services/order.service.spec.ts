import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { OrderService } from './order.service';
import { Order, CreateOrderRequest } from '../models/order.model';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(OrderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch orders', () => {
    const mockOrders: Order[] = [
      {
        id: 1,
        customerName: 'Ana',
        product: 'Laptop',
        quantity: 3,
        status: 'NEW',
        createdAt: '2026-04-27T14:00:00'
      }
    ];

    service.getOrders().subscribe(orders => {
      expect(orders.length).toBe(1);
      expect(orders[0].customerName).toBe('Ana');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/orders');
    expect(req.request.method).toBe('GET');
    req.flush(mockOrders);
  });

  it('should create an order', () => {
    const request: CreateOrderRequest = {
      customerName: 'Ana',
      product: 'Laptop',
      quantity: 3
    };

    const mockResponse: Order = {
      id: 1,
      ...request,
      status: 'NEW',
      createdAt: '2026-04-27T14:00:00'
    };

    service.createOrder(request).subscribe(order => {
      expect(order.id).toBe(1);
      expect(order.customerName).toBe('Ana');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/orders');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });

  it('should execute batch', () => {
    const mockResponse = {
      executionId: 12,
      message: 'Batch executed'
    };

    service.executeBatch().subscribe(response => {
      expect(response.executionId).toBe(12);
      expect(response.message).toBe('Batch executed');
    });

    const req = httpMock.expectOne('http://localhost:8080/api/batch/orders/process');
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
