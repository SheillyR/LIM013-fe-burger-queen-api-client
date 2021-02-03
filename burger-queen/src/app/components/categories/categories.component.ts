import { Component, OnInit, NgModule, OnDestroy } from '@angular/core';
import { faUtensils, faHamburger, faGlassWhiskey, faIceCream, faDrumstickBite } from '@fortawesome/free-solid-svg-icons';
import { ProductI } from '../../models/product.model';
import { ApiService } from '../../services/api.service';
import { DataService } from "../../services/data/data.service";
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  faUtensils = faUtensils;
  faHamburger = faHamburger;
  faGlassWhiskey = faGlassWhiskey;
  faIceCream = faIceCream;
  faDrumstickBite = faDrumstickBite;

  product!: ProductI[];
  productCategory!: ProductI[];

  productSelected!: ProductI[];
  displaytoken!: string;

  constructor(private api: ApiService, private data: DataService, private router: Router) {}
  
  ngOnInit(){
    // Aqui obtenemos los productos de la API
    this.api.getAllProducts().subscribe(( product: ProductI[] )=> {
      this.product = product;
      this.productCategory = this.product;
      console.log(product);
    })
    // this.data.currentProduct.subscribe(product=> this.product = product);
  }

  ngOnDestroy() {
    
  }

  OnCategories(category: string){
    if (category === 'Menu'){
      this.productCategory = this.product;
    } else {
      this.productCategory = this.product.filter(elem => elem.type === category);
    }
  }

  addProducts(product: ProductI){
    this.data.addProduct(product);
    console.log(product);
    }
}


