import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Order, CreateOrderRequest, BatchExecutionResponse, OrderStatus } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.apiUrl}/api/orders`;
  private batchUrl = `${environment.apiUrl}/api/batch/orders/process`;

  constructor(private http: HttpClient) {}

  getOrders(status?: OrderStatus): Observable<Order[]> {
    let params = new HttpParams();
    if (status) {
      params = params.set('status', status);
    }
    return this.http.get<Order[]>(this.apiUrl, { params });
  }

  createOrder(request: CreateOrderRequest): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, request);
  }

  executeBatch(): Observable<BatchExecutionResponse> {
    return this.http.post<BatchExecutionResponse>(this.batchUrl, {});
  }
}
