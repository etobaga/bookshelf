import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'bookshelf';
  displayChild: boolean = false;
  constructor() { console.log('AppComponent:Constructor'); }
  toggle() { this.displayChild = ! this.displayChild; }

  ngOnChanges() { console.log("AppComponent:OnChanges"); }
  ngOnInit() { console.log("AppComponent:OnInit"); }}
