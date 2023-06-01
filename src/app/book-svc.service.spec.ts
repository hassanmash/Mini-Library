import { book } from "./book";
import { BookSvcService } from "./book-svc.service";

describe('Book Service',()=> {
    let svc: BookSvcService;
    beforeEach(()=> {
        svc = new BookSvcService;
    });
    it('getBookList() should return booklist array from the service', ()=> {
        let booklist: book[] = [];

        booklist = svc.BookList;

        let resBookList = svc.getBookList();

        expect(resBookList).toBe(booklist);
    });
    it('getBookList() should return updated booklist array from the service after adding a new book', ()=> {
        let booklist: book[] = [...svc.BookList];
        
        let newBook: book = new book(svc.getBookID,'newBook','newPub',0,true);
        booklist.push(newBook)

        svc.addBookList('newBook','newPub',0,true);
        let resBookList = svc.getBookList();

        expect(resBookList).toEqual(booklist);
    });
});