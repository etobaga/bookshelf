import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogComponent} from './log/log.component';
import {RegisterComponent} from './register/register.component';
import {Router} from '@angular/router';
import {SignService} from './sign.service';
import {FormsModule} from '@angular/forms';
import {SignRoutingModule} from './sign-routing.module';



@NgModule({
  declarations: [ LogComponent, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SignRoutingModule,
  ], exports:[LogComponent, RegisterComponent]
})
export class SignModule {
  constructor(private router: Router, private signService: SignService) { }
  logout() {
    this.signService.logout();
    this.router.navigate(['']);
  }
}
