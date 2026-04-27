import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { Order, OrderStatus } from '../../models/order.model';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  orders: Order[] = [];
  filteredOrders: Order[] = [];
  selectedStatus: OrderStatus | 'ALL' = 'ALL';
  isLoading = false;
  error: string | null = null;
  successMessage: string | null = null;

  statuses: (OrderStatus | 'ALL')[] = ['ALL', 'NEW', 'PROCESSED', 'FAILED'];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.isLoading = true;
    this.error = null;
    const status = this.selectedStatus === 'ALL' ? undefined : this.selectedStatus;

    this.orderService.getOrders(status).subscribe({
      next: (data) => {
        this.orders = data;
        this.applyFilter();
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar pedidos: ' + (err.message || 'Error desconocido');
        this.isLoading = false;
      }
    });
  }

  onFilterChange(): void {
    this.loadOrders();
  }

  applyFilter(): void {
    if (this.selectedStatus === 'ALL') {
      this.filteredOrders = this.orders;
    } else {
      this.filteredOrders = this.orders.filter(order => order.status === this.selectedStatus);
    }
  }

  executeBatch(): void {
    if (!confirm('¿Ejecutar el batch de procesamiento?')) {
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.successMessage = null;

    this.orderService.executeBatch().subscribe({
      next: (response) => {
        this.successMessage = `Batch ejecutado exitosamente (ID: ${response.executionId})`;
        this.loadOrders();
      },
      error: (err) => {
        this.error = 'Error al ejecutar batch: ' + (err.message || 'Error desconocido');
        this.isLoading = false;
      }
    });
  }

  getStatusClass(status: OrderStatus): string {
    switch (status) {
      case 'NEW':
        return 'status-new';
      case 'PROCESSED':
        return 'status-processed';
      case 'FAILED':
        return 'status-failed';
      default:
        return '';
    }
  }

  getStatusLabel(status: OrderStatus): string {
    switch (status) {
      case 'NEW':
        return 'Nuevo';
      case 'PROCESSED':
        return 'Procesado';
      case 'FAILED':
        return 'Fallido';
      default:
        return status;
    }
  }

  closeSuccessMessage(): void {
    this.successMessage = null;
  }

  closeErrorMessage(): void {
    this.error = null;
  }
}
