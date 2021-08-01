import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {

  constructor(private authorservice:AuthorsService,private router:Router) { }
img:any='';
title:any=sessionStorage.getItem('title');
tag:any=sessionStorage.getItem('tag');
txt:any=sessionStorage.getItem('txt');
id:any=sessionStorage.getItem('id');
  ngOnInit(): void {
  }
  onFileSelected(event:any){
    this.img=event.target.files[0];
    console.log(this.img);
    
  }
  editAuthor(){
  var formdata=new FormData();
  formdata.append('title',this.title);
  formdata.append('tag',this.tag);
  formdata.append('txt',this.txt);
  formdata.append('img',this.img);
  this.authorservice.editAuthor(formdata,this.id).subscribe((res)=>{
    alert("Success");
    this.router.navigate(['authors']);
  })
  }
  
}
