import { Component, OnInit } from '@angular/core';
import { BookSvcService } from '../book-svc.service';

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {

  public bookID:number = 1;

  constructor(private srvc:BookSvcService) { }

  ngOnInit(): void {
    this.srvc.searchElem = this.bookID;
  }

  public updateID(){
    this.srvc.searchElem = this.bookID;
  }

}
