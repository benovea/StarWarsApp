// tslint:disable: quotemark
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
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

  it('should show relevant data', fakeAsync(() => {
    // component.form2.patchValue({
    //   peopleSelection: 'foo',
    // });

    tick();
    fixture.detectChanges();

    // const name = fixture.debugElement.query(By.css('.foo'));
    const name = fixture.debugElement.query(By.css("[data-cy='name']"));
    const hair = fixture.debugElement.query(By.css("[data-cy='hair']"));
    const eye = fixture.debugElement.query(By.css("[data-cy='eyes']"));
    const birth = fixture.debugElement.query(By.css("[data-cy='birth']"));
    const gender = fixture.debugElement.query(By.css("[data-cy='gender']"));

    // const gender =
    //   fixture.debugElement.nativeElement.querySelector("[data-cy='gender']");

    expect(name.nativeElement.textContent).toContain(mockPeople.name);
    // expect(foo.innerText).toContain(mockPeople.name);
    expect(hair.nativeElement.textContent).toContain(mockPeople.hair_color);
    expect(hair.nativeElement.textContent).toContain(mockPeople.hair_color);
    expect(eye.nativeElement.textContent).toContain(mockPeople.eye_color);
    expect(birth.nativeElement.textContent).toContain(mockPeople.birth_year);
    expect(gender.nativeElement.textContent).toContain(mockPeople.gender);
  }));
});
