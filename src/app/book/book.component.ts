import { Component, Input, OnInit } from '@angular/core';
import { book } from '../book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input()
  public bookDetail: book | undefined;
  public id:number | undefined;
  public name:string | undefined;
  public pubsName:string | undefined;
  public price:number | undefined;
  public stock:boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    this.id = this.bookDetail?.bookID;
    this.name = this.bookDetail?.bookName;
    this.pubsName = this.bookDetail?.publisher;
    this.price = this.bookDetail?.price;
    this.stock = this.bookDetail?.inStock;
  }

}
