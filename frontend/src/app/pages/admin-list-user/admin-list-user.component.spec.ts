import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListUserComponent } from './admin-list-user.component';

describe('AdminListUserComponent', () => {
  let component: AdminListUserComponent;
  let fixture: ComponentFixture<AdminListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
