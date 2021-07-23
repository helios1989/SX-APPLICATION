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

  reset(): void {
    this.appForm.reset();
  }
}
