import {Component, OnInit} from '@angular/core';
import {Book} from "../model/book.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  bookForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private bookService: BookService) {

  }

  ngOnInit() {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      author: ['', Validators.required],
      price: [0, Validators.required],
      checked: ['']
    });

  }

  saveBook() {
    let book: Book = this.bookForm.value;
    this.bookService.saveBook(book).subscribe({
      next: value => {
        alert(JSON.stringify(value));
      },
      error: err => {
        console.log(err);
      }
    });

  }

}
