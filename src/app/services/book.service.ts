import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book.model";
import {Observable} from "rxjs";


//Dans react, il y a pas la notion du service (plutot il faut utiliser le usecontext)
@Injectable({
  //Ce service est disponible dans la racine du projet(tous les module)
  providedIn: 'root'
})
export class BookService {

  private _host:string='http://localhost';
  private _port:string='3000';
  constructor(private http: HttpClient) {
  }

  searchBook(name: String,limit: Number,page: Number) {
    return this.http.get<Book[]>(`${this._host}:${this._port}/books?name_like=${name}&_limit=${limit}&_page=${page}`,{observe:'response'});
  }

  checkedBook(book: Book) {

    const url = `${this._host}:${this._port}/books/${book.id}`;
    const updatedData = {checked: !book.checked};
    return this.http.patch<Book>(url, updatedData);
  }

  getBookById(bookId: number) {
    return this.http.get<Book>(`${this._host}:${this._port}/books/`+ bookId);
  }

  deleteBook(book: Book) {
    const url = `${this._host}:${this._port}/books/${book.id}`;
    return this.http.delete<Book>(url);
  }

  saveBook(book:Book){
    const url = `${this._host}:${this._port}/books`;
    return this.http.post<Book>(url,book);
  }

  updateBook(book:Book){
    const url = `${this._host}:${this._port}/books/${book.id}`;
    return this.http.patch<Book>(url,book);
  }

}
