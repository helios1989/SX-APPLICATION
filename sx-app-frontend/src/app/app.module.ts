import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from '@components/main-layout/main-layout.component';
import { AppSharedMaterialModule } from './shared/app-shared-material.module';
import { MemberSearchComponent } from './features/member-search/member-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { memberReducer } from './store/members/members.reducer';
import { SearchResultsComponent } from '@features/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MemberSearchComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppSharedMaterialModule,
    StoreModule.forRoot({member: memberReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
