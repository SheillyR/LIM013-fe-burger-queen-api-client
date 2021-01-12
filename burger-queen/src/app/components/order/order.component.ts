import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Subscription } from 'rxjs';
/* import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs'; */

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit, OnDestroy {
  message!:string;
  subscription!: Subscription;

  constructor(private data: DataService) {  }

  ngOnInit(): void {
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  newMessage() {
    this.data.changeMessage("Hello from Sibling")
  }
}
