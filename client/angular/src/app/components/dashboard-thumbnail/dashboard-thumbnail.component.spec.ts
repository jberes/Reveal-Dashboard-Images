import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardThumbnailComponent } from './dashboard-thumbnail.component';

describe('DashboardThumbnailComponent', () => {
  let component: DashboardThumbnailComponent;
  let fixture: ComponentFixture<DashboardThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
