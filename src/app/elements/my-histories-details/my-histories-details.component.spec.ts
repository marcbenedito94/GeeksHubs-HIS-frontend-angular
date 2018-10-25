import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHistoriesDetailsComponent } from './my-histories-details.component';

describe('HistoriesDetailsComponent', () => {
  let component: MyHistoriesDetailsComponent;
  let fixture: ComponentFixture<MyHistoriesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHistoriesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHistoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
