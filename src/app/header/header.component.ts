import { Component, OnInit } from '@angular/core';
import {SignService} from '../sign/sign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: SignService) {
  }

  ngOnInit(): void {
  }

  username = localStorage.getItem('username');

}
