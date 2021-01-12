import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { faUtensils, faHamburger, faGlassWhiskey, faIceCream, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { ProductI } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { DataService } from "../../services/data/data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;
  
  faUtensils = faUtensils;
  faHamburger = faHamburger;
  faGlassWhiskey = faGlassWhiskey;
  faIceCream = faIceCream;
  faDrumstickBite = faDrumstickBite;


  product!: ProductI[];
  productCategory!: ProductI[];

  constructor(private api: ApiService, private data: DataService) {}
  ngOnInit(){
    // Aqui obtenemos los productos de la API
    this.api.getAllProducts().subscribe(( product: ProductI[] )=> {
      this.product = product;
      this.productCategory = this.product;
      console.log(product);
    })

    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  OnCategories(category: string){
    if (category === 'Menu'){
      this.productCategory = this.product;
    } else {
      this.productCategory = this.product.filter(elem => elem.type === category);
    }
  }
}
