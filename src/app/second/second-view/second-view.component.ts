import { Component, OnInit } from '@angular/core';
import { ViewAndFilterService  } from '../second-shared/viewAndFilter.service';
import { Observable, Subject  } from "rxjs";
import { HttpClient } from '@angular/common/http';
//import { OrderByPipePipe } from '../order-by-pipe.pipe';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {
  colSpanNumber:number = 3;
  filterData:string = 'acending';
  itemList:Array<{name:string,image:string,price:string}>;
  constructor(private _vnFService: ViewAndFilterService, private http:HttpClient) {

  }
  ngOnInit(): void {
    this.getJSON().subscribe(data => {
        console.log(data);
        this.itemList=data;
    });

    this._vnFService.colSpanNumber.subscribe(colSpn=>{
      this.colSpanNumber = colSpn;
    })

    this._vnFService.viewFilter.subscribe(filterData=>{
      this.filterData = filterData;
    })
  }

  getJSON(): Observable<any> {
    return this.http.get("../../../assets/product-category.json");
  }

}
