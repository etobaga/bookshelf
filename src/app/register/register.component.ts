import { Component } from '@angular/core';
import {ComponentCanDeactivate} from '../can-deactivate.guard';
import {Observable} from 'rxjs';
import {CanDeactivateGuard} from '../can-deactivate.guard';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements ComponentCanDeactivate {

  login = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };
  saved = false;

  onSubmit(){
    console.log(this.login.firstname, this.login.lastname, this.login.email, this.login.password, this.login.passwordConfirmation);
    this.saved = true;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.login.firstname.length > 0 || this.login.lastname.length > 0 || this.login.email.length > 0 || this.login.password.length > 0 ||
      this.login.passwordConfirmation.length > 0)
      && !this.saved) {
      return confirm('Are you sure about it?');
    }
    return true;
  }

}
