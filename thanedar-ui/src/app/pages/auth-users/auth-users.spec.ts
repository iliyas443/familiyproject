import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUsers } from './auth-users';

describe('AuthUsers', () => {
  let component: AuthUsers;
  let fixture: ComponentFixture<AuthUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
