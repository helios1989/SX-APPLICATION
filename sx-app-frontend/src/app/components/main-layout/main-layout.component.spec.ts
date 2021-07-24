import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { RouterTestingModule } from '@angular/router/testing'
import { FormsModule } from '@angular/forms'  
import { ReactiveFormsModule} from '@angular/forms' 
import { MainLayoutComponent } from './main-layout.component';
import { By } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
let mockRouter = {
	navigate: jasmine.createSpy('navigate')
}

const navigateTest = [
  { 
    path: 'member-search',
    elem: '#member-search',
    pathCalled: '/member-search',
    activatePage: 'member search'
  },
  { 
    path: 'search-results',
    elem: '#search-results',
    pathCalled: '/search-results',
    activatePage: 'search results'
  },
];
describe('MainLayoutCompoennt', () => {
  let component: MainLayoutComponent;
  let fixture: ComponentFixture<MainLayoutComponent>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MainLayoutComponent],
      imports: [
        NoopAnimationsModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        RouterTestingModule,
        HttpClientTestingModule,
        RouterModule
      ],
      providers: [
        { provide: Router, useValue: mockRouter},
      ]
    }).compileComponents();
  }
  ));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(MainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  navigateTest.forEach((object) => {
    it(`should navigate to  ${object.path} and set active page to ${object.activatePage} when navigateTo  ${object.path} is click`,
     fakeAsync(() => {
      let membershipClick = fixture.debugElement.nativeElement.querySelector(`${object.elem}`);
      membershipClick.click();
      tick();
      fixture.whenStable().then(() => {
        expect (mockRouter.navigate).toHaveBeenCalledWith([`${object.pathCalled}`]);
        expect(component.activePage).toEqual(`${object.activatePage}`);
      });
    })
  );
  });

});
