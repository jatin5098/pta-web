import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantEntryComponent } from './tenant-entry.component';

describe('TenantEntryComponent', () => {
  let component: TenantEntryComponent;
  let fixture: ComponentFixture<TenantEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
