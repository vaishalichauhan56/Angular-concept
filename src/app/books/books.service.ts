import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks() {
    return [
      {
        name: 'The Diary of A Young GirlDeluxe Hardbound EditioHardcover',
        author: 'Anne Frank',
        img: 'https://m.media-amazon.com/images/I/718MgUuw87S.jpg',
        amount: 300.56
      },
      {
        name: 'The new',
        author: 'Anne Frank',
        img: 'https://m.media-amazon.com/images/I/718MgUuw87S.jpg',
        amount: 300
      },
      {
        name: 'ne2',
        author: 'Anne Frank',
        img: 'https://m.media-amazon.com/images/I/718MgUuw87S.jpg',
        amount: 300
      },
    ]

  }
}
