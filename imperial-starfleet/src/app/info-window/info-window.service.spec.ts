import { TestBed, inject } from '@angular/core/testing';

import { InfoWindowService } from './info-window.service';

describe('InfoWindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoWindowService]
    });
  });

  it('should be created', inject([InfoWindowService], (service: InfoWindowService) => {
    expect(service).toBeTruthy();
  }));
});
