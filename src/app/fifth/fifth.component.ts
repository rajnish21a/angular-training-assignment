import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OrderByClickPipe } from './order-by-click.pipe';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  marksList:Array<{
  'Name': string,
  'Class': number,
  'Section': string,
  'Sub1': number,
  'Sub2': number,
  'Sub3': number}>;
  sortState:number[]= [0,1,-1];
  clickCounter: {
      'Name': number,
      'Class': number,
      'Section': number,
      'Sub1': number,
      'Sub2': number,
      'Sub3': number
  }={
  'Name': 0,
  'Class': 0,
  'Section': 0,
  'Sub1': 0,
  'Sub2': 0,
  'Sub3': 0};
  i:number=0;
  lastColumnName:string;




  constructor(private http:HttpClient, private _OrderByClickPipe:OrderByClickPipe) { }

  ngOnInit(): void {
    this.getJSON().subscribe(data => {
        console.log(data);
        this.marksList=data;
    });
  }

  getJSON(): Observable<any> {
    return this.http.get("../../../assets/student-marks-table.json");
  }

  onSort(columnName:string):void{
    if(this.lastColumnName !== columnName){
      this.i=0;
    }
    this.lastColumnName = columnName;
    this.i = ++this.i % (this.sortState.length);
    this.clickCounter[columnName] = this.sortState[this.i];
    this.getJSON().subscribe(data => {
        console.log(data);
        this.marksList=data;
        this.marksList = this._OrderByClickPipe.transform(this.marksList, {property: columnName, direction: this.clickCounter[columnName]});
    });
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
