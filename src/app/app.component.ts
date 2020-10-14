import {Component, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  title = 'bookshelf';
  constructor() { console.log('AppComponent:Constructor'); }

  ngOnChanges() { console.log("AppComponent:OnChanges"); }
  ngOnInit() { console.log("AppComponent:OnInit"); }}
