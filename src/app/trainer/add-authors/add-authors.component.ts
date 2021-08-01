import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-authors.component.html',
  styleUrls: ['./add-authors.component.css']
})
export class AddAuthorsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private authorservice:AuthorsService) { }

  ngOnInit(): void {
  }
title:any;
tag:any;
txt:any;
img:any;
onFileSelected(event:any){
  this.img=event.target.files[0];
  console.log(this.img);
  
}
newAuthors(){
var formdata=new FormData();
console.log(this.title);
formdata.append("title",this.title);
formdata.append("tag",this.tag);
formdata.append("txt",this.txt);
formdata.append("img",this.img);
this.authorservice.addAuthors(formdata);
alert("Success!!");
this.router.navigate(['authors']);

}
}
