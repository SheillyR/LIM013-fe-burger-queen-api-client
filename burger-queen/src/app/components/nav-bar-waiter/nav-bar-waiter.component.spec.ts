import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarWaiterComponent } from './nav-bar-waiter.component';

describe('NavBarWaiterComponent', () => {
  let component: NavBarWaiterComponent;
  let fixture: ComponentFixture<NavBarWaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarWaiterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarWaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
