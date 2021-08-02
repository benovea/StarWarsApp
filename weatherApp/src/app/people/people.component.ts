import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { shareReplay } from "rxjs/operators";
import { PeopleService } from "./people.service";
import { PeopleData } from "./PeopleData";


@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponentClass implements OnInit {

  constructor(private peopleService: PeopleService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) {}


  people: Observable<PeopleData>;
  allPeople: Observable<PeopleData[]> = this.peopleService.getPeople().pipe(
    shareReplay());

  nameFromUrl = this.route.snapshot.paramMap.get('name');

  form2 = this.fb.group({
    peopleSelection: [null, Validators.required]
  });

  ngOnInit() {
    if (this.nameFromUrl) {
      this.peopleService.findPeopleByName(this.nameFromUrl).subscribe((people: PeopleData) => {
        this.form2.patchValue({
          peopleSelection: people.url
        });
        this.router.navigate(['people', people.name]);
      });
    }
  }

  // handleEvent(url: string) {
  //   this.PeopleService.findPeopleByUrl(url).subscribe((people) => {
  //     this.router.navigate(['people', people.name]);
  //     this.people = this.PeopleService.getAllPeople(people.url)
  //   });
  // }


  valueChanges = this.form2.get('peopleSelection').valueChanges.subscribe(changes => {
    this.peopleService.findPeopleByUrl(changes).subscribe((people) => {
      this.people = this.peopleService.getAllPeople(people.url);
      this.router.navigate(['people', people.name]);
    });

    this.people = this.peopleService.getAllPeople(changes);
  });



}
