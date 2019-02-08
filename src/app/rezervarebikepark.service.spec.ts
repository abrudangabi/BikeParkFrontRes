import { TestBed, inject } from '@angular/core/testing';

import { RezervarebikeparkService } from './rezervarebikepark.service';

describe('RezervarebikeparkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RezervarebikeparkService]
    });
  });

  it('should be created', inject([RezervarebikeparkService], (service: RezervarebikeparkService) => {
    expect(service).toBeTruthy();
  }));
});
