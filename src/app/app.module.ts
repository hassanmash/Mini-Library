import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AvailablePipe } from './available.pipe';
import { AddBookComponent } from './add-book/add-book.component';
import { ErrorComponent } from './error/error.component';
import routes from './app.routes';
import { FormsModule } from '@angular/forms';
import { BookComponent } from './book/book.component';
import { SearchIdComponent } from './search-id/search-id.component';
import { SearchPubsComponent } from './search-pubs/search-pubs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AllBooksComponent,
    SearchComponent,
    SearchResultComponent,
    AvailablePipe,
    AddBookComponent,
    ErrorComponent,
    BookComponent,
    SearchIdComponent,
    SearchPubsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
