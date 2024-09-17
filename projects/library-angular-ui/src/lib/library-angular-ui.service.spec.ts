import { TestBed } from '@angular/core/testing';

import { LibraryAngularUiService } from './library-angular-ui.service';

describe('LibraryAngularUiService', () => {
  let service: LibraryAngularUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryAngularUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
