import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsComponent } from './planets/planets.component';

export const routes: Routes = [
  { path: '', redirectTo: 'abc', pathMatch: 'full' },
  { path: 'abc', component: PlanetsComponent },
  {
    path: 'planets',
    loadChildren: () =>
      import('./planets/planets.module').then((m) => m.PlanetsModule),
  },
  {
    path: 'people',
    loadChildren: () =>
      import('./people/people.module').then((m) => m.PeopleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
