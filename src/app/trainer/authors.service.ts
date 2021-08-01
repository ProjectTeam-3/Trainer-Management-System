import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http:HttpClient) { }
  getAuthors(){
   return this.http.get("http://localhost:3000/authors");
  }    
  addAuthors(fd:any){
  return this.http.post<any>("http://localhost:3000/addauthors",fd).subscribe((authors)=>{
    console.log(authors)
  });
  }  
  getAuthor(id:any){
    console.log(id);
  return this.http.get("http://localhost:3000/author/"+id);
  }   
  editAuthor(fd:any,id:any){
    return this.http.post("http://localhost:3000/editauthor/"+id,fd);
  }  
  deleteAuthor(id:any){
 return this.http.get("http://localhost:3000/author/delete/"+id);
  }          
}
 