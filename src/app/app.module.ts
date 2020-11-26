import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CarouselModule, MDBBootstrapModule, WavesModule} from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';
import { BooksComponent } from './books/books.component';
import { RatingsComponent } from './ratings/ratings.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { Cards2Component } from './cards2/cards2.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AddComponent } from './add/add.component';
import {CanActivateGuard} from './can-activate.guard';
import {CanDeactivateGuard} from './can-deactivate.guard';



const appRoutes: Routes = [
  {path: '', component: NewsComponent},
  {path: 'books', component: BooksComponent},
  {path: 'ratings', component: RatingsComponent},
  {path: 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard]},
  {path: 'add', component: AddComponent, canActivate: [CanActivateGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent,
    BooksComponent,
    RatingsComponent,
    CardsComponent,
    FooterComponent,
    Cards2Component,
    RegisterComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    NgbModule,
    CarouselModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    FormsModule
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
