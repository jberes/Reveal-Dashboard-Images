import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule, IgxRippleModule, IgxIconModule } from 'igniteui-angular';
import { DashboardViewerComponent } from './dashboard-viewer.component';

describe('DashboardViewerComponent', () => {
  let component: DashboardViewerComponent;
  let fixture: ComponentFixture<DashboardViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardViewerComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule, IgxRippleModule, IgxIconModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
