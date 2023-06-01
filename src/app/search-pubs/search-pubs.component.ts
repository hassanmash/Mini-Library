import { Component, OnInit } from '@angular/core';
import { BookSvcService } from '../book-svc.service';

@Component({
  selector: 'app-search-pubs',
  templateUrl: './search-pubs.component.html',
  styleUrls: ['./search-pubs.component.css']
})
export class SearchPubsComponent implements OnInit {


  public pubsName:string = '';

  constructor(private srvc:BookSvcService) { }

  ngOnInit(): void {
  }

  public updateID(){
    this.srvc.searchElem = this.pubsName;
  }

}
