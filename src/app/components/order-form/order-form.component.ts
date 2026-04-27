import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';
import { CreateOrderRequest } from '../../models/order.model';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
  @Output() orderCreated = new EventEmitter<void>();

  orderForm: FormGroup;
  isLoading = false;
  error: string | null = null;
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.orderForm = this.fb.group({
      customerName: ['', [Validators.required, Validators.minLength(2)]],
      product: ['', [Validators.required, Validators.minLength(2)]],
      quantity: [1, [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)]]
    });
  }

  onSubmit(): void {
    if (this.orderForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.error = null;
    this.successMessage = null;

    const request: CreateOrderRequest = this.orderForm.value;

    this.orderService.createOrder(request).subscribe({
      next: (order) => {
        this.successMessage = `Pedido creado exitosamente (ID: ${order.id})`;
        this.orderForm.reset({ quantity: 1 });
        this.isLoading = false;
        this.orderCreated.emit();
        setTimeout(() => {
          this.successMessage = null;
        }, 4000);
      },
      error: (err) => {
        this.error = 'Error al crear pedido: ' + (err.message || 'Error desconocido');
        this.isLoading = false;
      }
    });
  }

  getFieldError(fieldName: string): string | null {
    const field = this.orderForm.get(fieldName);

    if (!field || !field.errors || !field.touched) {
      return null;
    }

    if (field.errors['required']) {
      return `${fieldName === 'customerName' ? 'Cliente' : fieldName === 'product' ? 'Producto' : 'Cantidad'} es requerido`;
    }

    if (field.errors['minlength']) {
      return `Mínimo ${field.errors['minlength'].requiredLength} caracteres`;
    }

    if (field.errors['min']) {
      return `La cantidad debe ser mayor que 0`;
    }

    if (field.errors['pattern']) {
      return 'La cantidad debe ser un número entero';
    }

    return null;
  }

  closeErrorMessage(): void {
    this.error = null;
  }
}
