import { TestBed, inject } from '@angular/core/testing';

import { NgxAmplitudeService } from './ngx-amplitude.service';

describe('NgxAmplitudeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxAmplitudeService]
    });
  });

  it('should create service', inject([NgxAmplitudeService], (service: NgxAmplitudeService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([NgxAmplitudeService], (service: NgxAmplitudeService) => {
    expect(service.getMeaning()).toBe(42);
  }));
});
