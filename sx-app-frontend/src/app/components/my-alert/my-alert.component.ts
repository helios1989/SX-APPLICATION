import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { MyAlert } from '~/app/model/my-alert.model';
import { AppService } from '~/app/service/app.service';

@Component({
    selector: 'app-alert',
    templateUrl: 'my-alert.component.html',
})
export class MyAlertComponent implements OnInit, OnDestroy{

    myAlertSubscription = new Subscription;
    title!: string;
    description!: string;
    constructor(private appService: AppService) {
    }

    ngOnInit(): void {
        this.myAlertSubscription = this.appService.myAlertContent$.subscribe((d: MyAlert) => {
            this.title = d.title;
            this.description = d.description;
        });
    }
    ngOnDestroy(): void {
        this.myAlertSubscription.unsubscribe();
    }
  
}