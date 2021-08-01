import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAuthorsComponent } from './add-authors/add-authors.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AuthGuard } from './auth.guard';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [{path:'login',component:LoginComponent},{path:'signup',component:SignupComponent},
{path:'',component:HomeComponent},{path:'books',component:BooksComponent},{path:'addbook',component:AddBooksComponent},
{path:'authors',component:AuthorsComponent},{path:'addauthors',component:AddAuthorsComponent},
{path:'authors/:title',component:AuthorComponent},{path:'books/:id',component:BookComponent},
{path:'editbook',component:EditBookComponent},{path:'editauthor',component:EditAuthorComponent},
{path:'home',component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
