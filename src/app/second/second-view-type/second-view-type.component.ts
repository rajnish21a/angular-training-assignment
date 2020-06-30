import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { ViewAndFilterService } from '../second-shared/viewAndFilter.service';

@Component({
  selector: 'app-second-view-type',
  templateUrl: './second-view-type.component.html',
  styleUrls: ['./second-view-type.component.css']
})
export class SecondViewTypeComponent implements OnInit {
  //@Output() isGridType=new EventEmitter<{gridType:boolean}>();
  //isGridView: boolean = false;
  constructor(private _vnFServ: ViewAndFilterService) { 
  }

  ngOnInit(): void {
  }
 
  // List View
listView() {
  this._vnFServ.setColSpan(false);
}

// Grid View
gridView() {
  this._vnFServ.setColSpan(true);
}

}
