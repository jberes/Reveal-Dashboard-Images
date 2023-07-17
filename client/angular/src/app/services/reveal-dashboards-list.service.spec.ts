import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RevealDashboardsListService } from './reveal-dashboards-list.service';

describe('RevealDashboardsListService', () => {
  let service: RevealDashboardsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RevealDashboardsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
