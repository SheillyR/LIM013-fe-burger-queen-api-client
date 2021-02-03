import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { OrdersResponseI } from '../../models/orders-response.model';
import { ProductI } from '../../models/product.model';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.sass']
})
export class KitchenComponent implements OnInit {

  orders!: OrdersResponseI[];
  ordersDay!: OrdersResponseI[];
  product!: ProductI[];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.bringOrders();
  }

  orderList(id: string, status: string){
    this.api.putOrder(id, status). subscribe(data => {
      console.log(data);
      this.bringOrders();
    })
  }

  bringOrders(){
    this.api.getOrders().subscribe(data => {
      this.orders = data;
      this.ordersDay = this.orders.filter(item => item.status === "pending");
    })
  }
}
