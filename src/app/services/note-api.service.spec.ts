import { TestBed } from '@angular/core/testing';

import { NoteAPIService } from './note-api.service';

describe('NoteAPIService', () => {
  let service: NoteAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
