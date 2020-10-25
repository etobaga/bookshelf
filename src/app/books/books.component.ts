import { Component, OnInit } from '@angular/core';
import {ListService} from '../list.service';
import {LogService} from '../logservice.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [ListService, LogService]
})
export class BooksComponent implements OnInit {
  items: string[] = [];
  name: string;
  constructor(private listService: ListService, private logger: LogService) {}
  addItem(name: string){
  this.listService.addList(name);
    this.logger.log('Test the `log()` Method');
  }

  ngOnInit(){
    this.items = this.listService.getList();
  }

}

