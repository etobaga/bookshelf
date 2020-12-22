import {Component, Input, OnInit} from '@angular/core';
import {ComponentCanDeactivate} from '../../can-deactivate.guard';
import {Observable} from 'rxjs';
import {NgModel} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CanDeactivateGuard} from '../../can-deactivate.guard';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements ComponentCanDeactivate, OnInit {

  login = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    city: '',
    passwordConfirmation: '',
  };
  saved = false;


  @Input() userDetails = {id:'', firstname :'', lastname:'', email:'', password:'',city:''}
  constructor(public userService: UserService, public _router: Router) {}
    log()
    {
      this._router.navigate(["/log"]);
    }



  onSubmit(){
    console.log(this.login.firstname, this.login.lastname, this.login.email, this.login.password, this.login.passwordConfirmation, this.login.city);
    this.saved = true;
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.login.firstname.length > 0 || this.login.lastname.length > 0 || this.login.email.length > 0 || this.login.password.length > 0 ||
      this.login.passwordConfirmation.length > 0 || this.login.city.length > 0)
      && !this.saved) {
      return confirm('Are you sure about it?');
    }
    return true;
  }



ngOnInit(): void {
}
addUser(dataUser){
  this.userService.createUser(this.userDetails).subscribe((data:{})=>{
    this._router.navigate(['/log']);
  })

  }
}
