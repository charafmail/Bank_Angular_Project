import {Component, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../model/book.model";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{
  public bookId:number=1;
  bookForm !: FormGroup;
  public book!:Book;
  constructor(private bookService:BookService, private activatedRoute:ActivatedRoute,private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.bookId = this.activatedRoute.snapshot.params['id'];

    this.bookService.getBookById(this.bookId).subscribe({

      next: book => {
        console.log(book);
        this.bookForm = this.formBuilder.group({
          id: new FormControl(book.id),
          name: new FormControl(book.name, Validators.required),
          author: new FormControl(book.author, Validators.required),
          price: new FormControl(book.price, Validators.required),
          checked: new FormControl(book.checked)
        });

      },
      error: err => {
       alert(JSON.stringify(err));
      }
    });
  }


  updateBook() {
    let book = this.bookForm.value;

    this.bookService.updateBook(book).subscribe({

      next: response => {
        alert(JSON.stringify(response));
      },
      error: err => {
        alert(JSON.stringify(err));
      }
    })


  }


}
