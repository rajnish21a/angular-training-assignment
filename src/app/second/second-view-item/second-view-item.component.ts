import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second-view-item',
  templateUrl: './second-view-item.component.html',
  styleUrls: ['./second-view-item.component.css']
})
export class SecondViewItemComponent implements OnInit {

  constructor() { }
  @Input() colorCode: string;
  @Input() columnNumber: string;
  @Input() singleItem:{name:string,image:string,price:string};
  ngOnInit(): void {
  }


}
