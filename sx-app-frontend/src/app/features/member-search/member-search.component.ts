import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router }          from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AppService } from '~/app/service/app.service';
import { MyAlertComponent } from '~/app/components/my-alert/my-alert.component';
import { storeMember } from '~/app/store/members/members.action';
import { Store } from '@ngrx/store';
import { Member } from '~/app/model/member.model';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.scss']
})
export class MemberSearchComponent implements OnInit {

  public appForm!: FormGroup
  constructor(
    private http: HttpClient,
    public fb: FormBuilder,
    private router: Router,
    private appService: AppService,
    public dialog: MatDialog,
    private store: Store<{member: Member[]}>
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.appForm = this.fb.group({
      serviceDate: new FormControl('', Validators.required),
      policyNumber: new FormControl(null, [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
      memberCardNumber: new FormControl(null)
    })
  }

  get serviceDate(): FormControl {
    return <FormControl>this.appForm.get("serviceDate");
  }

  get policyNumber(): FormControl {
    return <FormControl>this.appForm.get("policyNumber");
  }

  get memberCardNumber(): FormControl {
    return <FormControl>this.appForm.get("memberCardNumber");
  }
  search() {
  
    if(!this.appForm.valid) return;
  
    let searchUrl = `${environment.apiUrl}members`;
  
    const {policyNumber, memberCardNumber} = this.appForm.value;
    if (this.appForm.value?.policyNumber) {
      searchUrl = `${searchUrl}?policyNumber=${policyNumber}`
    } 
    if (this.appForm.value?.memberCardNumber) {
      searchUrl = `${searchUrl}&memberCardNumber=${memberCardNumber}`
    }
    this.appService.getMembers(searchUrl).subscribe((d) => {
      if (!d.length) {
        this.appService.myAlertContent$.next(
          {
            title: "No Data Found !", 
            description: "Please provide different search criteria"
          }
        );
        this.dialog.open(MyAlertComponent);
        return;
      }
      this.store.dispatch(storeMember({ props: d }));
      this.appService.activepage$.next('search results');
      this.router.navigate(['/search-results']);
    });
  }

  reset(): void {
    this.appForm.reset();
  }
}
