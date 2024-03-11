import {Component, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {Book} from "../model/book.model";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";
import {SubjectService} from "../services/subject.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
    public books : Array<Book>=this.appStateService.bookState.books;
    public name =this.appStateService.bookState.name;
    public limit =this.appStateService.bookState.limit;
    public currentPage =this.appStateService.bookState.currentPage;
    public totalPages =this.appStateService.bookState.totalPages;
    public totalElements =this.appStateService.bookState.totalElements;
    constructor(private bookService:BookService, private  router:Router,public appStateService:AppStateService,private subjectService:SubjectService){
}

    ngOnInit(): void {
        this.searchBook();
    }


  searchBook() {
    this.bookService.searchBook(this.name, this.limit, this.currentPage).subscribe({
      next: response => {
        console.log("response", response)
        //avec un cast
        this.books = response.body as Book[];
        this.appStateService.bookState.totalElements= parseInt(response.headers.get('X-Total-Count')!);

          this.totalPages = Math.floor(Number(this.appStateService.bookState.totalElements)  / Number(this.limit));

          if(Number(this.appStateService.bookState.totalElements)  % Number(this.limit) !=0){
            this.totalPages= Number(this.totalPages)+1;
          }

      },
      error: eer => {
        console.log("ann error occurred", eer)
      }
    })

  }

    checkedBook(book: Book) {
        const bookIndex = this.books.findIndex(b => b.id === book.id);

            this.bookService.checkedBook(book).subscribe({
                    next: response => {
                        this.books[bookIndex] = response;
                        console.log('Data updated successfully', response);
                    },
                    error: error => {
                        console.error(error);
                    }
                },
            );

    }

  deleteBook(book: Book) {
      this.bookService.deleteBook(book).subscribe({
        next:response=>{
              this.searchBook();
              //Or suppression coté Front
              //this.books = this.books.filter(b => b.id!=book.id);
        },
        },
      );
  }

  changePage(currentPage: number) {
      this.currentPage=currentPage;
       this.searchBook();
  }

  editBook(book: Book) {
    this.router.navigateByUrl("/admin/editBook/"+book.id);
  }
}
