import { Component, OnInit } from '@angular/core';
import { book } from '../book';
import { BookSvcService } from '../book-svc.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public typeSearch: string = '';
  public temp: book[] = [];


  constructor(private booksrvc:BookSvcService) { }

  ngOnInit(): void {
  }

  public PerformSearch() {
    this.temp = [];
    if(this.typeSearch == 'idSearch'){
      // console.log('Search by ID...');
      this.temp = this.booksrvc.BookList.filter(b => b.bookID == this.booksrvc.searchElem);
    }
    else {
      // console.log('Search by Publisher...');
      this.temp = this.booksrvc.BookList.filter(b => b.publisher.toLowerCase() == this.booksrvc.searchElem.toString().toLowerCase());
    }
    // console.log('Search Logging... :',this.booksrvc.searchElem);
  }

}
