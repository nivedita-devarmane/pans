import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycube'
})
export class CubePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value * value * value;
  }

}
