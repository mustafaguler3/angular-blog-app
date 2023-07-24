import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryNavbarComponent } from './category-navbar.component';

describe('CategoryNavbarComponent', () => {
  let component: CategoryNavbarComponent;
  let fixture: ComponentFixture<CategoryNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryNavbarComponent]
    });
    fixture = TestBed.createComponent(CategoryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
