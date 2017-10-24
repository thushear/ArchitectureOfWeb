import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  col = ['1月','2月','3月','4月'];

  row = [11,22,33,44];

  data = [
    11
  ];
  constructor() { }

  ngOnInit() {
  }

  reload() {
    this.col = ['1月','2月','3月','4月'];
    let newRows = new Array();
    for(var i = 0;i<4;i++){
      newRows.push(Math.random());
    }
    this.row = newRows;
  }

}
