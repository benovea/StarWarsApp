import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockPeople, PeopleTestingModule } from './people-testing.module';
import { PeopleComponentClass } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponentClass;
  let fixture: ComponentFixture<PeopleComponentClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PeopleTestingModule],
      declarations: [PeopleComponentClass],
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComponentClass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show relevant data', fakeAsync(() => {
    // component.form2.patchValue({
    //   peopleSelection: 'foo',
    // });

    component.people = of(mockPeople);

    const name = fixture.debugElement.query(
      By.css('[data-cy="name"]')
    ).nativeElement;

    // const hair: HTMLHeadingElement =
    //   fixture.nativeElement.querySelector('[data-cy="hair"]');
    // const eye: HTMLHeadingElement =
    //   fixture.nativeElement.querySelector('[data-cy="eyes"]');
    // const birth: HTMLHeadingElement =
    //   fixture.nativeElement.querySelector('[data-cy="birth"]');
    // const gender: HTMLHeadingElement =
    //   fixture.nativeElement.querySelector('[data-cy="gender"]');
    console.log(name);

    expect(name.innerText).toContain(mockPeople.name);
    // expect(hair.innerText).toContain(mockPeople.hair_color);
    // expect(eye.innerText).toContain(mockPeople.eye_color);
    // expect(birth.innerText).toContain(mockPeople.birth_year);
    // expect(gender.innerText).toContain(mockPeople.gender);
  }));
});
