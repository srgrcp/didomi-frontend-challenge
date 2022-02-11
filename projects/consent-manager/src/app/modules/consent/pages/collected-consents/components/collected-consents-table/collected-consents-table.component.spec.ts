import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectedConsentsTableComponent } from './collected-consents-table.component';

describe('CollectedConsentsTableComponent', () => {
  let component: CollectedConsentsTableComponent;
  let fixture: ComponentFixture<CollectedConsentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectedConsentsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectedConsentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
