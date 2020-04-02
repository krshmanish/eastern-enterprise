import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number'
})
export class NumberPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(parseInt(value));
    
    if (!parseInt(value)) {
      return 'NA';
    }
    return value;
  }

}
