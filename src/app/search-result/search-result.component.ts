import { Component, Input, OnInit } from '@angular/core';
import { book } from '../book';
import { BookSvcService } from '../book-svc.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  @Input()
  public toSearch: book[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
