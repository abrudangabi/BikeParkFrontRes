import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervarebikeparksComponent } from './rezervarebikeparks.component';

describe('RezervarebikeparksComponent', () => {
  let component: RezervarebikeparksComponent;
  let fixture: ComponentFixture<RezervarebikeparksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervarebikeparksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervarebikeparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
