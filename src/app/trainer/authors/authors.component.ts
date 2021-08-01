import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthorsService } from '../authors.service';
import { AuthorsModel } from './authors.model';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:AuthorsModel[]=[];
  constructor(private authorservice:AuthorsService,private router:Router,public auth:AuthService) { }

  ngOnInit(): void {
    this.authorservice.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data))
    })
  }
editAuthor(author:any){
sessionStorage.setItem('id',author._id);
sessionStorage.setItem('title',author.title);
sessionStorage.setItem('tag',author.tag);
sessionStorage.setItem('txt',author.txt);
this.router.navigate(['editauthor']);
}
deleteAuthor(author:any){
    var id=author._id;
    console.log(id);
    var c=confirm("Are you sure you want to delete this author?");
    if(c==true){
    this.authorservice.deleteAuthor(id).subscribe((res)=>{
     this.authors= this.authors.filter(p=>p!==author)
    })
  }
}
}
