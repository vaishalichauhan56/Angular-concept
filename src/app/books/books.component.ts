import { Component } from '@angular/core';
import { Book } from '../types/book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  // isSwitching: boolean = false;
  constructor(private booksService: BooksService) {
    console.log({ constructor: "Constructor" });
  }
  books: Book[] = [];


  ngOnInit(): void {
    console.log({ OnInit: "OnInit" })
    this.books = this.booksService.getBooks();
  }

}
