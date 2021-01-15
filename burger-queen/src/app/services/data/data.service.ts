import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductItem } from 'src/app/models/product-item.model';
import { ProductI } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arrayProducts: ProductItem[]=[];
  private productSource = new BehaviorSubject<ProductItem[]>([]);

  currentProduct = this.productSource.asObservable();

  constructor() { }

  addProduct(product: ProductI) {
    this.arrayProducts.push({...product, amount:1, totalAmount:product.price} );
    this.productSource.next(this.arrayProducts); 
  }

  cleanView() {
    this.arrayProducts = [];
    this.productSource.next(this.arrayProducts);
  }
}