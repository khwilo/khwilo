import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: IntroComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
