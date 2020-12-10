import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user.module';
import {SignService} from '../sign.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  constructor(private _auth: SignService, private _router: Router, private userService: UserService) {
    if (this._auth.loggedIn) {
      this._router.navigate(['books']);
    }
  }

  User: any = [];
  username;
  password;

  login(): void {
    if (this.username != '' && this.password != '') {
      if (this._auth.login(this.username, this.password)) {
        this._router.navigate(["/home"]);
        window.location.reload();
      } else
        alert("Wrong username or password");
    }
  }

  loadUsers() {
    return this.userService.getUsers().subscribe(data => this.User = data);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

}
