import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({ providedIn: 'root'})
export class ViewAndFilterService{
  //colSpanNo = 3;
  colSpanNumber= new Subject<any>();
  viewFilter=new Subject<string>();
  constructor(){

  }

  sortItemList(filter):void{
      this.viewFilter.next(filter);
  }

  setColSpan(view): void {
    if (view){
      this.colSpanNumber.next(3);
    }else{
      this.colSpanNumber.next(12);
    }
  }

};
