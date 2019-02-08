import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervarebikeparkSearchComponent } from './rezervarebikepark-search.component';

describe('RezervarebikeparkSearchComponent', () => {
  let component: RezervarebikeparkSearchComponent;
  let fixture: ComponentFixture<RezervarebikeparkSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervarebikeparkSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervarebikeparkSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
