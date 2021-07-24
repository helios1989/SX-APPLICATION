import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MainLayoutComponent} from '~/app/components/main-layout/main-layout.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
        MainLayoutComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it('should have mainLayout',() => {
    const fixtureMainLayout = TestBed.createComponent(MainLayoutComponent);
    const mainLayout =  fixtureMainLayout.componentInstance;
    expect(mainLayout).toBeTruthy();
  });
});
