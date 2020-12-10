import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogComponent} from './log/log.component';
import {RegisterComponent} from './register/register.component';
import {CanDeactivateGuard} from '../can-deactivate.guard';



const routes: Routes = [
  {path : 'log', component: LogComponent},
  {path : 'register', component: RegisterComponent, canDeactivate: [CanDeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignRoutingModule { }
