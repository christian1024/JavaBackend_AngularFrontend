import { ComponentFixture, TestBed } from '@angular/core/testing';

import PersonalComponent from './personal';

describe('Personal', () => {
  let component: PersonalComponent;
  let fixture: ComponentFixture<PersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
