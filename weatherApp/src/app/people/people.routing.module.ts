import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponentClass } from './people.component';


const routes: Routes = [
  {path: '',
  component: PeopleComponentClass
},
{
  path: ':name',
  component: PeopleComponentClass
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PeopleRoutingModule {

}
