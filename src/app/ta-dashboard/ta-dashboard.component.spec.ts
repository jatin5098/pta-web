import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaDashboardComponent } from './ta-dashboard.component';

describe('TaDashboardComponent', () => {
  let component: TaDashboardComponent;
  let fixture: ComponentFixture<TaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
