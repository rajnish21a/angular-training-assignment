import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipePipe implements PipeTransform {

  transform(array: Array<{name:string,image:string,price:string}>, args: string): Array<{name:string,image:string,price:string}> {

    if(!array || array === undefined || array.length === 0) return null;

      array.sort((a: any, b: any) => {
        if (+a.price < +b.price) {
          return args==='acending'?-1:1;
        } else if (+a.price > +b.price) {
          return args==='acending'?1:-1;1;
        } else {
          return 0;
        }
      });
      return array;
    }

}
