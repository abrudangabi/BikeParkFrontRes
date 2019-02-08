import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervarebikeparkDetailComponent } from './rezervarebikepark-detail.component';

describe('RezervarebikeparkDetailComponent', () => {
  let component: RezervarebikeparkDetailComponent;
  let fixture: ComponentFixture<RezervarebikeparkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervarebikeparkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervarebikeparkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
