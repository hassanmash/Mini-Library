import { Component, OnInit } from '@angular/core';
import { book } from '../book';
import { BookSvcService } from '../book-svc.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  public stock: boolean = false;
  public bName:string = '';
  public bPrice: number = 0;
  public pName: string = '';
  public pList:string [] = ['Publisher1','Publisher2','Publisher3','Publisher4','Publisher5','Publisher6','Publisher7','Publisher7'];

  constructor(private router:Router ,private booksrc:BookSvcService) { }

  ngOnInit(): void {
  }

  public addBook() {
    this.booksrc.addBookList(this.bName,this.pName,this.bPrice,this.stock);
    // console.log(this.booksrc.BookList);
    this.router.navigate(['allbooks']);
  }
  public cancelBook() {
    this.router.navigate(['allbooks']);
  }

}
