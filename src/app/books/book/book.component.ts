import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../types/book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  isInCart = false;
  // @Output() bookEmitter = new EventEmitter<Book>();
  constructor(private cartService: CartService) { };
  addToCart() {
    // console.log(this.book);
    this.isInCart = true;

    this.cartService.add(this.book);
    // this.bookEmitter.emit(this.book)
  }
  removeToCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);

  }

}
