import { Injectable } from '@angular/core';
import { Book } from '../types/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<Book> = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
    console.log("cart added book object : "+JSON.stringify(this.cart));
  }
  get(){
    return this.cart;
  }
  remove(book : Book){
    console.log("before removing cart object : "+JSON.stringify(this.cart));
    console.log("paasing book object : "+JSON.stringify(book));
    this.cart = this.cart.filter((b) => {
      console.log("filter book condition : "+JSON.stringify(b));
      b != book
    } )
    console.log("After removing cart object : "+JSON.stringify(this.cart));
  }
}
