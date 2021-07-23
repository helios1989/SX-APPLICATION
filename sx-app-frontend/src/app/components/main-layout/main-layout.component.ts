import { Component ,OnInit, OnDestroy} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router }  from '@angular/router';
import { Subscription } from 'rxjs';
import { AppService } from '~/app/service/app.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, OnDestroy{

  activePageSubscription: Subscription = new Subscription();
  activePage: string = '';
  constructor(
    private appService: AppService,
    private breakpointObserver: BreakpointObserver, 
    private router: Router
  ){}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  ngOnInit() {
    this.activePageSubscription = this.appService.activepage$.subscribe((d) => this.activePage = d);
  }
  ngOnDestroy() {
    this.activePageSubscription.unsubscribe();
  }


  navigateTo(myRoutes: string): void {
    const activePage = myRoutes.replace(/-/g,' ');
    this.appService.activepage$.next(activePage);
    this.router.navigate(['/'+myRoutes]);
  }

}
