import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ProductItem } from '../../models/product-item.model';
import { DataService } from '../../services/data/data.service';
import { UsersResponseI } from '../../models/users-response.model';
import { ApiService } from '../../services/api.service';
import { OrdersI } from '../../models/orders.model';
import { OrdersResponseI } from '../../models/orders-response.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit, OnDestroy {
  
  productsOrder!: ProductItem[];
  total!: number;
  order!: OrdersI;
  ordersResponse!: OrdersResponseI;
  client!: string;
  products: any;
  orderSend: object = {};
  array!: any;
  user!: UsersResponseI[];

  constructor(private data: DataService, private api: ApiService) {  }

  ngOnInit(): void {
        // Aqui obtenemos los usuarios de la API
        this.api.getUsers().subscribe((user: UsersResponseI[] )=> {
          this.user = user;
          console.log(user);
        })
    this.data.currentProduct.subscribe(product => this.productsOrder = product);
  }

  ngOnDestroy() {
    
  }
  // index: number, userId: string, client: string, id: string
  sendOrder(userId: string, client: string){
    this.array = [];
    console.log(userId);
    console.log(client);
    this.products = this.productsOrder.forEach(element => {
      console.log(element._id);
      this.array.push({productId: element._id, qty: element.amount});
      return this.array;
    });
    this.order = {userId: userId, client: client, products: this.array }
    console.log(this.order);
    console.log(this.array);
    this.api.sendOrders(this.order).subscribe(data=>{
      console.log(data);
    })
    this.data.cleanView();
  }

  totalAmount(){
    // Calculate total
    this.total = this.productsOrder.reduce((acc,obj,) => 
      acc + (obj.totalAmount),0);

      return this.total.toFixed(2);
  }


}
