import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeWaiterComponent } from './views/home-waiter/home-waiter.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { OrdersComponent } from './views/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavBarWaiterComponent } from './components/nav-bar-waiter/nav-bar-waiter.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeWaiterComponent,
    LoginComponent,
    PageNotFoundComponent,
    OrdersComponent,
    ProductsComponent,
    NavBarWaiterComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
