import { Injectable } from '@angular/core';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookSvcService {
  
  public getBookID: number = 1;
  public BookList: book[] = [];

  public searchElem: string|number = '';

  constructor() { 
    this.BookList.push(new book(this.getBookID++,'Angular 3.0','CitiusTech',20000,true));
    this.BookList.push(new book(this.getBookID++,'JavaScript','Google',10000,true));
    this.BookList.push(new book(this.getBookID++,'TypeScript','CitiusTech',5000,true));
    this.BookList.push(new book(this.getBookID++,'.NET','Microsoft',9000,true));
    this.BookList.push(new book(this.getBookID++,'JAVA Full Stack','META',35000,false));    
  }
  
  public getBookList():book[] {
    return this.BookList;
  }
  
  public addBookList(name:string, pubName:string, price:number, avail:boolean) {
    this.BookList.push(new book(this.getBookID++,name,pubName,price,avail));    
  }
}
