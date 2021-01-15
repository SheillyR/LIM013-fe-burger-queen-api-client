import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItem } from '../../models/product-item.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit, OnDestroy {

  productsOrder!: ProductItem[];
  total!: number;
  
  constructor(private data: DataService) {  }

  ngOnInit(): void {
    this.data.currentProduct.subscribe(product => this.productsOrder = product);
  }

  ngOnDestroy() {
    
  }

  sendOrder(){
    this.data.cleanView();
    console.log(this.data.cleanView());
  }

  totalAmount(){
    // Calculate total
    this.total = this.productsOrder.reduce((acc,obj,) => 
      acc + (obj.totalAmount),0);

      return this.total;
  }

}
