import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUpdate } from './personal-update';

describe('PersonalUpdate', () => {
  let component: PersonalUpdate;
  let fixture: ComponentFixture<PersonalUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalUpdate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
