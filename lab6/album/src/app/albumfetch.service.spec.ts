import { TestBed } from '@angular/core/testing';

import { AlbumfetchService } from './albumfetch.service';

describe('AlbumfetchService', () => {
  let service: AlbumfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
