import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './components/profile/profile.component';
import {JobsComponent} from "./components/jobs/jobs.component";
import {PrivacyComponent} from "./components/privacy/privacy.component";


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'privacy', component: PrivacyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
