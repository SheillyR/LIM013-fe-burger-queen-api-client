import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../models/product-item.model';
import { faPlusCircle, faMinusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-products',
  templateUrl: './order-products.component.html',
  styleUrls: ['./order-products.component.sass']
})
export class OrderProductsComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faPlusCircle = faPlusCircle;
  faMinusCircle = faMinusCircle;

  @Input() productsOrder!: ProductItem[];
  result!: string;
  constructor() { }

  ngOnInit(): void {
  }

  increment(index: number, amount: number, price: number ){
    const counter = amount + 1;
    this.productsOrder[index].amount = counter;
    this.productsOrder[index].totalAmount = parseFloat((counter * price).toFixed(2));
  }

  decrement(index: number, amount: number, price: number ){
    const counter = amount - 1;
    this.productsOrder[index].amount = counter;
    this.productsOrder[index].totalAmount = parseFloat((counter * price).toFixed(2));
  }

  deleteItem(index: number){
    this.productsOrder.splice(index,1);
  }
}
