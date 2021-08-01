import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';
import { AuthorsModel } from '../authors/authors.model';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(private authorserice:AuthorsService,private route:ActivatedRoute) { }
  id='';
  author={
    title:'',
    tag:'',
    txt:'',
    img:'',
    id:''
  }
  ngOnInit(): void {
    
    this.route.params.subscribe( params =>{ console.log(params);
    this.id=params.title;
    console.log(this.id)
    } ); 
    this.authorserice.getAuthor(this.id).subscribe((author)=>{
      this.author=JSON.parse(JSON.stringify(author));
    })     
  }
  
}


