import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from '../shared/components/match/match.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'match',
    pathMatch: 'full',
  },
  {
    path: 'match',
    component: MatchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
