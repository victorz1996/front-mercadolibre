import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSearchComponent } from './more-search.component';

describe('MoreSearchComponent', () => {
  let component: MoreSearchComponent;
  let fixture: ComponentFixture<MoreSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
