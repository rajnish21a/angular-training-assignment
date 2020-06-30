import { Component, OnInit } from '@angular/core';
import { ViewAndFilterService  } from '../second-shared/viewAndFilter.service';
import { Observable, Subject  } from "rxjs";

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {
  gridElementColorCodes: string[] = ['#aaa', '#bbb', '#ccc', '#ddd']; 
  colSpanNumber:number = 3;
  constructor(private _vnFService: ViewAndFilterService) { 
    this._vnFService.colSpanNumber.subscribe(colSpn=>{
      this.colSpanNumber = colSpn;
    })
  }
  ngOnInit(): void {
    //this.colSpan= this.vnFService.getColSpan();
  }

  counter(i: number) {
    return new Array(i);
  }

  
}
