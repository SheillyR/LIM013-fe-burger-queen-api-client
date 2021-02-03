import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { OrdersResponseI } from '../../models/orders-response.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.sass']
})
export class OrdersComponent implements OnInit {
  
  orders!: OrdersResponseI[];
  ordersList!: OrdersResponseI[];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.bringOrders();
  }
  deliverOrder(id: string, status:string){
    this.api.putOrder(id, status).subscribe(data => {
      this.bringOrders();
    })
  }
  //Metodo traer ordernes
  bringOrders(){
    this.api.getOrders().subscribe(data => {
      this.orders=data;
      this.ordersList = this.orders.filter(item =>  item.status === "delivering");
    })
  }

}
