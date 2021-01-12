import { Injectable } from '@angular/core';
import { ProductI } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL donde esta la API
  url: string = 'http://localhost:3001/';

  constructor(private http: HttpClient) { }

  // Metodo GET que traiga los productos
  getAllProducts(): Observable<ProductI[]>{
    let dir = this.url + 'products'
    return this.http.get<ProductI[]>(dir);
  }

}
