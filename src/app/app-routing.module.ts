import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlackComponent } from './slack/slack.component';

const routes: Routes = [
  { path: '', component: SlackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
