import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';
import { BooksModel } from '../books/books.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {
  title="Add Books";
  constructor(private booksservice:BooksService,private router:Router,private http:HttpClient) { }
  // item:BooksModel[]=[]
  img :any;
  name:any;
  author:any;
  genre:any

  //item=new BooksModel()
  ngOnInit(): void {
  }
  onFileSelected(event:any){
     this.img=event.target.files[0];
     console.log(this.img);
     
  }
  addBooks(){
var formdata=new FormData();
formdata.append("img",this.img);
formdata.append("title",this.name);
formdata.append("author",this.author);
formdata.append('genre',this.genre);


console.log(formdata);
// this.http.post<any>("http://localhost:3000/addbooks",formdata).subscribe((books)=>{
  
// });
this.booksservice.newBook(formdata);
alert("Success!!");
this.router.navigate(['/books'])
  }

}
