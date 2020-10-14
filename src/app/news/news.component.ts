import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor() { }
  birthday = new Date(2020, 8, 25);
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  displayChild: boolean = false;
  toggle1() { this.displayChild = ! this.displayChild; }

  count: number=0;
  buttonClicked() : void {
    this.count=this.count+1
  }

  ngOnInit(): void {
  }

}
