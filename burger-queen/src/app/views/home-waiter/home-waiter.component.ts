import { Component, OnInit, Input} from '@angular/core';
import { ProductI } from '../../models/product.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home-waiter',
  templateUrl: './home-waiter.component.html',
  styleUrls: ['./home-waiter.component.sass']
})
export class HomeWaiterComponent implements OnInit{

  product!: ProductI[];

  constructor(private api: ApiService){
  }
  ngOnInit(){
    // Aqui obtenemos los productos de la API
    this.api.getAllProducts().subscribe(( product: ProductI[] )=> {
      this.product = product;
      console.log(product);
    })
  }

}
