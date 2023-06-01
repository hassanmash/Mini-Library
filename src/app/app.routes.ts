import { RouterModule } from "@angular/router";
import { AddBookComponent } from "./add-book/add-book.component";
import { AllBooksComponent } from "./all-books/all-books.component";
import { ErrorComponent } from "./error/error.component";
import { SearchIdComponent } from "./search-id/search-id.component";
import { SearchPubsComponent } from "./search-pubs/search-pubs.component";
import { SearchComponent } from "./search/search.component";

const routes = [
    { path:'', component: AllBooksComponent},
    { path:'allbooks', component: AllBooksComponent},
    { path:'addbook', component: AddBookComponent},
    { 
        path:'search', 
        component: SearchComponent,
        children: [
            { path: 'searchID', component: SearchIdComponent},
            { path: 'searchPublisher', component: SearchPubsComponent},
        ]
    },
    { path:'**', component: ErrorComponent},
];

export default RouterModule.forRoot(routes);