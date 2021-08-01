import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
 book={
   title:'',
   author:'',
   genre:'',
   img:'',
   
 }
 id=''
  constructor(private route:ActivatedRoute,private bookservice:BooksService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      this.id=params.id;
    })
    this.bookservice.getBook(this.id).subscribe((book)=>{
      this.book=JSON.parse(JSON.stringify(book));
    })
  }
  
}
