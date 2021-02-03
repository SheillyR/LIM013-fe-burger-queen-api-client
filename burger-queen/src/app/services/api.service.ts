import { Injectable } from '@angular/core';
import { ProductI } from '../models/product.model';
import { LoginI } from '../models/login.model';
import { LoginResponseI } from '../models/login-response.model';
import { UsersResponseI } from '../models/users-response.model';
import { OrdersI } from '../models/orders.model';
import { OrdersResponseI } from '../models/orders-response.model';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL donde esta la API
  url: string = 'https://appi-burger-queen-client.herokuapp.com/';
  urlApi: string = 'https://appi-burger-queen-client.herokuapp.com/'

  constructor(private http: HttpClient) { }

  onLogin(form: LoginI):Observable<LoginResponseI>{
    let direction = this.urlApi + 'auth';
    return this.http.post<LoginResponseI>(direction, form);
  }

  getUsers():Observable<UsersResponseI[]>{
    let direction = this.urlApi + 'users';
    return this.http.get<UsersResponseI[]>(direction);
  }

  // Metodo GET que traiga los productos
  getAllProducts(): Observable<ProductI[]>{
    let params = new HttpParams().append('limit', '40');
    let dir = this.url + 'products';
    return this.http.get<ProductI[]>(dir, { params: params })
  }

  sendOrders(order: OrdersI):Observable<OrdersResponseI>{
    let direction = this.urlApi + 'orders';
    return this.http.post<OrdersResponseI>(direction, order);
  }

  getOrders():Observable<OrdersResponseI[]>{
    let params = new HttpParams().append('limit', '40');
    let dir = this.url + 'orders';
    return this.http.get<OrdersResponseI[]>(dir, { params: params })
  }
  
  // Modify order
  putOrder(id: string, status: string): Observable<OrdersResponseI[]>{
    let dir = this.urlApi + 'orders/'+ id;
    return this.http.put<OrdersResponseI[]>(dir,{status: status});
  }
}
