import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateTareaComponent } from './user-create-tarea.component';

describe('UserCreateTareaComponent', () => {
  let component: UserCreateTareaComponent;
  let fixture: ComponentFixture<UserCreateTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCreateTareaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCreateTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
