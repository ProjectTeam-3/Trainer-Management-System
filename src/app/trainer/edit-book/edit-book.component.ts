import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor(private bookservice:BooksService,private router:Router) { }

  ngOnInit(): void {
  }

title:any=sessionStorage.getItem("title");
author:any=sessionStorage.getItem("author");
genre:any=sessionStorage.getItem("genre");
img:any="";
id=sessionStorage.getItem("id");
onFileSelected(event:any){
  this.img=event.target.files[0];
  console.log(this.img);
  
}
book={
title:"",
author:"",
genre:"",
img:""
}
editBook(){
  console.log(this.title);
  console.log(this.author);
  console.log(this.genre);
  var  formdata=new FormData();
    formdata.append("title",this.title);
formdata.append("author",this.author);
formdata.append('genre',this.genre);
formdata.append('img',this.img);
this.bookservice.editBook(formdata,this.id).subscribe((res)=>{
  alert("Success!");
this.router.navigate(['books']);
})
  
}
}
