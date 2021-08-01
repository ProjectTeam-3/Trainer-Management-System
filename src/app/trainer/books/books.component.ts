import { Component, OnInit } from '@angular/core';
import { BooksModel } from './books.model';
import { BooksService } from '../books.service';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title:String="Books"
  books:BooksModel[]=[];
  constructor(private booksservice:BooksService,public auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.booksservice.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data))
    })
  }
deleteBook(product:any){
  var id=product._id;
  var c=confirm("Are you sure you want to delete this book?");
  console.log(c);
  if(c==true){
    this.booksservice.deleteBook(id).subscribe((res)=>{
         this.books=this.books.filter(b=>b!==product)
         // this.router.navigate(['books']);
    })
  }
}
editBook(book:any){
  sessionStorage.setItem('title',book.title);
  sessionStorage.setItem('author',book.author);
  sessionStorage.setItem('genre',book.genre);
  sessionStorage.setItem('id',book._id);
  this.router.navigate(['editbook']);
}
}
