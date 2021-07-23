import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { FormsModule, 
  ReactiveFormsModule,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators 
} from '@angular/forms'  
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {MatDialogModule} from '@angular/material/dialog';
import { AppConstant } from '~/app/constant/AppConstant';
import { AppService } from '~/app/service/app.service';
import { Member } from '~/app/model/member.model';
import { StoreModule } from '@ngrx/store';
import { memberReducer } from '~/app/store/members/members.reducer';
import { environment } from '@environments/environment';

//components
import { MemberSearchComponent } from './member-search.component';
import { MyAlertComponent } from '~/app/components/my-alert/my-alert.component';


let routerSpy = {navigate: jasmine.createSpy('navigate')};
const failedFieldValidty = [
  { fieldName: 'serviceDate'},
  { fieldName: 'policyNumber'}
];
const mockMembers: Array<Member> = [
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
];
describe('MemberSearchComponent', () => {
  let component: MemberSearchComponent;
  let fixture: ComponentFixture<MemberSearchComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let appService: AppService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberSearchComponent,MyAlertComponent ],
      imports: [
        RouterTestingModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        MatDialogModule,
        StoreModule.forRoot({})
      ],
      providers: [
        AppService,
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    appService = TestBed.inject(AppService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberSearchComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });
  afterEach(() => {
    httpTestingController.verify(); //Verifies that no requests are outstanding.
  });
  it('appform invalid when empty', () => {
    expect(component.appForm.valid).toBeFalsy();
  });

  // test field validity in appForm 
  failedFieldValidty.forEach((obj)=>{
    it(`${obj.fieldName} field validity`, () => {
      let serviceDate = component.appForm.controls[obj.fieldName];
      expect(serviceDate.valid).toBeFalsy();
    });
  });

  it('should create MemberSearchComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should search a policyNumber when user click search with validforms', fakeAsync(() => {
    component.appForm.controls['serviceDate'].setValue("01202021");
    component.appForm.controls['policyNumber'].setValue("12");
    if (component.appForm.valid) {
      let searchClick = fixture.debugElement.nativeElement.querySelector("#search");
      searchClick.click();
      let req = httpTestingController.expectOne(`${environment.apiUrl}?policyNumber=12`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockMembers);
    }
  }));

  it("should have empty fields when reset is click", ()=>{
    let searchClick = fixture.debugElement.nativeElement.querySelector("#reset");
    searchClick.click();
    const {serviceDate, policyNumber, memberCardNumber} = component.appForm.controls;
    expect(serviceDate.value).toBeNull();
    expect(policyNumber.value).toBeNull();
    expect(memberCardNumber.value).toBeNull();
  });
});
