import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numpower'
})
export class PowerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result: number = value;
    let len: number = parseInt(args);
    for (let i = 1; i < len; i++) {
      result = result * value;
    }
    return result;
  }

}
