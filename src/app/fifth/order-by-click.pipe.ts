import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByClick'
})
export class OrderByClickPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {
    return records.sort((a, b)=>{
      if(a[args.property] < b[args.property]){
        return -1 * args.direction;
      }
      else if( a[args.property] > b[args.property]){
        return 1 * args.direction;
      }
      else{
        return 0;
      }
    });
  };
}
