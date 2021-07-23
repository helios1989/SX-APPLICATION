import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../constant/AppConstant';
import { Member } from '../model/member.model';
import { MyAlert } from '../model/my-alert.model';


@Injectable({providedIn: 'root'})
export class AppService {
    myAlertContent$: BehaviorSubject<MyAlert> = new BehaviorSubject<MyAlert>({
        title: '',
        description: ''
    });
    activepage$: BehaviorSubject<string> = new BehaviorSubject<string>('');
    constructor(private http: HttpClient) { }

    getMembers(searchUrl: string): Observable<Member[]> {
         return this.http.get<Member[]>(searchUrl);
    }

}