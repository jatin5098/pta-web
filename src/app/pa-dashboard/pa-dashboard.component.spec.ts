import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaDashboardComponent } from './pa-dashboard.component';

describe('PaDashboardComponent', () => {
  let component: PaDashboardComponent;
  let fixture: ComponentFixture<PaDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
