import { Routes } from '@angular/router';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderListComponent } from './components/order-list/order-list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pedidos' },
  { path: 'pedidos', component: OrderListComponent },
  { path: 'pedidos/nuevo', component: OrderFormComponent },
  { path: '**', redirectTo: 'pedidos' }
];
