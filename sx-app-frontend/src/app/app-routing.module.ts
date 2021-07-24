import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberSearchComponent } from '@features/member-search/member-search.component';
import { SearchResultsComponent } from './features/search-results/search-results.component';

const routes: Routes = [
  { path: 'member-search', component: MemberSearchComponent },
  { path: 'search-results', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
