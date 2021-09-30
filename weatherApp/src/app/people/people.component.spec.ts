import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { GenderEmojiPipe } from './gender-emoji.pipe';
import { mockPeople, PeopleTestingModule } from './people-testing.module';
import { PeopleComponentClass } from './people.component';
describe('PeopleComponent', () => {
  let component: PeopleComponentClass;
  let fixture: ComponentFixture<PeopleComponentClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, PeopleTestingModule],
      declarations: [PeopleComponentClass, GenderEmojiPipe],
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

  it('should show relevant data', () => {
    fixture.detectChanges();

    const name: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="name"]');
    const hair: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="hair"]');
    const eye: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="eyes"]');
    const birth: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="birth"]');
    const gender: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="gender"]');

    expect(name.innerText).toContain(mockPeople.name);
    expect(hair.innerText).toContain(mockPeople.hair_color);
    expect(eye.innerText).toContain(mockPeople.eye_color);
    expect(birth.innerText).toContain(mockPeople.birth_year);
    expect(gender.innerText).toContain(mockPeople.gender);
  });
});
