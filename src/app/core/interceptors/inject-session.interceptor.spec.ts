import { TestBed } from '@angular/core/testing';

import { InjectSessionInterceptor } from './inject-session.interceptor';

describe('InyectSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectSessionInterceptor = TestBed.inject(InjectSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
