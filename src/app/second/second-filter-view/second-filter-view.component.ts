import { Component, OnInit } from '@angular/core';
import { ViewAndFilterService } from '../second-shared/viewAndFilter.service';

@Component({
  selector: 'app-second-filter-view',
  templateUrl: './second-filter-view.component.html',
  styleUrls: ['./second-filter-view.component.css']
})
export class SecondFilterViewComponent implements OnInit {
  sortOptions:Array<{label: string,value: string}> =[
    {
      label:'Price: Low to High',
      value:'acending'
    },
    {
      label:'Price: High to Low',
      value:'decending'
    }
  ];

  constructor(private _viewnFilterServive: ViewAndFilterService) { }

  ngOnInit(): void {
  }

  onSortItem(event):void{
    this._viewnFilterServive.sortItemList(event.target.value);
  }

}
