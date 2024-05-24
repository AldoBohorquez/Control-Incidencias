import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEdElUserComponent } from './admin-ed-el-user.component';

describe('AdminEdElUserComponent', () => {
  let component: AdminEdElUserComponent;
  let fixture: ComponentFixture<AdminEdElUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEdElUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEdElUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
