import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsComponent } from './search-results.component';
import { Member } from '~/app/model/member.model';
import { StoreModule } from '@ngrx/store';
import { memberReducer } from '~/app/store/members/members.reducer';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('SearchResultsComponent', () => {
  let component: SearchResultsComponent;
  let fixture: ComponentFixture<SearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultsComponent ],
      imports:[ 
        StoreModule.forRoot({member: memberReducer})
      ],
      providers: [
        {
          provide: Store,
          useValue: { pipe: () => of(
            [
              {
                "id": 1,
                "firstName": "Winne",
                "lastName": "Janc",
                "memberCardNumber": 473128446,
                "policyNumber": 1405677686,
                "dataOfBirth": "26/07/1995"
              },
              {
                "id": 2,
                "firstName": "Ransom",
                "lastName": "Aslie",
                "memberCardNumber": 8047727435,
                "policyNumber": 6494400124,
                "dataOfBirth": "04/09/2012"
              },
            ]
          )},
        },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search-results component', () => {
    expect(component).toBeTruthy();
  });

  it("should have 2 members in load when store has 2 member value", () => {
    component.member$.subscribe((data) => {
      expect(data).toHaveSize(2)
    });
  });

  it("should have a card display when store has a value",() => {
    let cardContainer = fixture.debugElement.nativeElement.querySelector(".card-container");
    expect(cardContainer).toBeTruthy();
  });
});
