import { Component, OnInit } from '@angular/core';
import { book } from '../book';
import { BookSvcService } from '../book-svc.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {

  public bookSrcList: book[] = [];

  constructor(public booksrc: BookSvcService) { }

  ngOnInit(): void {
    this.bookSrcList = this.booksrc.getBookList();
  }

}
