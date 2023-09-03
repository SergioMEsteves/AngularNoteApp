import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { editingConfirmationGuard } from './editing-confirmation.guard';

describe('editingConfirmationGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => editingConfirmationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
