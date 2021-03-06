import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { PeopleComponentClass } from "./people.component";
import { PeopleRoutingModule } from "./people.routing.module";

@NgModule({
  declarations:[
    PeopleComponentClass
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PeopleRoutingModule
  ],
  exports: [PeopleComponentClass]

})

export class PeopleModule {}
