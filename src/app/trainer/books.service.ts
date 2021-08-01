import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  constructor(private http:HttpClient) {

   }
   getBooks(){
     return this.http.get("http://localhost:3000/books");
   }
   newBook(fd:any){
     console.log(fd);
     return this.http.post("http://localhost:3000/addbooks",fd).subscribe((books)=>{console.log(books)
    });
    
   }
   getBook(id:any){
     return this.http.get("http://localhost:3000/books/"+id);
   }
   deleteBook(id:any){
    return this.http.get("http://localhost:3000/book/delete/"+id)
   }
   editBook(fd:any,id:any){
     return this.http.post("http://localhost:3000/editbook/"+id,fd);
   }
}
