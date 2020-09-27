import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { RatingsComponent } from './ratings/ratings.component'
import { BooksComponent } from './books/books.component'

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/news"},
  {path: "news", component: NewsComponent},
  {path: "ratings", component: RatingsComponent},
  {path: "books", component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
