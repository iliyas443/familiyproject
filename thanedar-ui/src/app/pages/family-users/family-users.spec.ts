import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyUsers } from './family-users';

describe('FamilyUsers', () => {
  let component: FamilyUsers;
  let fixture: ComponentFixture<FamilyUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamilyUsers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
