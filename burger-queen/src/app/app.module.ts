import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeWaiterComponent } from './views/home-waiter/home-waiter.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { OrdersComponent } from './views/orders/orders.component';
import { NavBarWaiterComponent } from './components/nav-bar-waiter/nav-bar-waiter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrderComponent } from './components/order/order.component';
import { OrderProductsComponent } from './components/order-products/order-products.component';
import { KitchenComponent } from './views/kitchen/kitchen.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InterceptorService } from './interceptors/InterceptorService';

@NgModule({
  declarations: [
    AppComponent,
    HomeWaiterComponent,
    LoginComponent,
    PageNotFoundComponent,
    OrdersComponent,
    NavBarWaiterComponent,
    CategoriesComponent,
    OrderComponent,
    OrderProductsComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
