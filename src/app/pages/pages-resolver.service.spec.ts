import { TestBed } from '@angular/core/testing';

import { PagesResolverService } from './pages-resolver.service';

describe('PagesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagesResolverService = TestBed.get(PagesResolverService);
    expect(service).toBeTruthy();
  });
});
