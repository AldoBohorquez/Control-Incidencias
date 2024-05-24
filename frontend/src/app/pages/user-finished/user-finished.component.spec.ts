import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFinishedComponent } from './user-finished.component';

describe('UserFinishedComponent', () => {
  let component: UserFinishedComponent;
  let fixture: ComponentFixture<UserFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFinishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
