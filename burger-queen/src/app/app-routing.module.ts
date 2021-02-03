import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/login/login.component';
import { HomeWaiterComponent } from './views/home-waiter/home-waiter.component';
import { OrdersComponent } from './views/orders/orders.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-waiter',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home-waiter',
    component: HomeWaiterComponent,
  },
  {
    path: 'kitchen',
    component: KitchenComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
