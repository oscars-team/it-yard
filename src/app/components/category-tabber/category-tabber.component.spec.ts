import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTabberComponent } from './category-tabber.component';

describe('CategoryTabberComponent', () => {
  let component: CategoryTabberComponent;
  let fixture: ComponentFixture<CategoryTabberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryTabberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryTabberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
