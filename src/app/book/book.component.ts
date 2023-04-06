import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book: Book = {} as Book;
  @Output() bookEmitter = new EventEmitter<Book>();
  constructor() { };
  addToCart() {
    console.log(this.book);
    this.bookEmitter.emit(this.book)
  }

}
