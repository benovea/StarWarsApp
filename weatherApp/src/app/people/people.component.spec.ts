// tslint:disable: quotemark
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { mockPeople, PeopleTestingModule } from './people-testing.module';
import { PeopleComponentClass } from './people.component';

describe('PeopleComponent', () => {
  let component: PeopleComponentClass;
  let fixture: ComponentFixture<PeopleComponentClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PeopleTestingModule, RouterTestingModule],
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
    component.people = of(mockPeople);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show relevant data', fakeAsync(() => {
    // component.form2.patchValue({
    //   peopleSelection: 'foo',
    // });

    tick();
    fixture.detectChanges();

    // const name = fixture.debugElement.query(By.css('.foo'));
    const name =
      fixture.debugElement.nativeElement.querySelector("[data-cy='name']");

    const hair =
      fixture.debugElement.nativeElement.querySelector("[data-cy='hair']");

    const eye =
      fixture.debugElement.nativeElement.querySelector("[data-cy='eyes']");

    const birth =
      fixture.debugElement.nativeElement.querySelector("[data-cy='birth']");

    const gender =
      fixture.debugElement.nativeElement.querySelector("[data-cy='gender']");

    expect(name.textContent).toContain(mockPeople.name);
    // expect(foo.innerText).toContain(mockPeople.name);
    expect(hair.textContent).toContain(mockPeople.hair_color);

    expect(hair.textContent).toContain(mockPeople.hair_color);
    expect(eye.textContent).toContain(mockPeople.eye_color);
    expect(birth.textContent).toContain(mockPeople.birth_year);
    expect(gender.textContent).toContain(mockPeople.gender);
  }));
});
