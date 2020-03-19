import { TestBed } from '@angular/core/testing';

import { ExamplServiceService } from './exampl-service.service';

describe('ExamplServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamplServiceService = TestBed.get(ExamplServiceService);
    expect(service).toBeTruthy();
  });
});
