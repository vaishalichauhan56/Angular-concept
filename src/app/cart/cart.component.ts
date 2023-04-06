import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private CartService:CartService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  getCart(){
    return this.CartService.get()
  }

}
