import { Component, OnInit } from '@angular/core';
import { faUtensils, faHamburger, faGlassWhiskey, faIceCream } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass']
})
export class CategoriesComponent implements OnInit {
  faUtensils = faUtensils;
  faHamburger = faHamburger;
  faGlassWhiskey = faGlassWhiskey;
  faIceCream = faIceCream;


  constructor() { }

  ngOnInit(): void {
  }

}
