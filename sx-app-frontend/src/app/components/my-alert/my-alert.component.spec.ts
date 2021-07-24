import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlertComponent } from './my-alert.component';
import { MyAlert } from '~/app/model/my-alert.model';
import { AppService } from '~/app/service/app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('MyAlertComponent', () => {
  let component: MyAlertComponent;
  let fixture: ComponentFixture<MyAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule],
      declarations: [ MyAlertComponent ],
      providers: [AppService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
