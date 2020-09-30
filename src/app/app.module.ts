import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { BooksComponent } from './books/books.component';
import { NewsComponent } from './news/news.component';
import {CheckboxComponent} from './checkbox/checkbox.component';
import {CardComponent} from '../cards/card.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    BooksComponent,
    NewsComponent,
    CardComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
