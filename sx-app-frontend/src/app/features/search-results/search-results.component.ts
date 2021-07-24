import { Component, OnInit } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Member } from '~/app/model/member.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  member$!: Observable<Member[]>;
  constructor(private store: Store<{member: Member[]}>) { }

  ngOnInit(): void {
    this.member$ = this.store.pipe(select('member'));
  }

}
