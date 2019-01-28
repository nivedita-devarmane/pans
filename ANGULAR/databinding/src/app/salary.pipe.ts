import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';




@Pipe({
  name: 'salary'
})
export class SalaryPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    value = value * 12;

    let formatedByCurrencyPipe = super.transform(value, 'INR');

    let salary1 = new Intl.NumberFormat('en-IN',
      {
        style: 'currency', currency: 'INR',
        minimumFractionDigits: 2
      });

    let fomatedByMe = salary1.format(value);

    return fomatedByMe;
  }
}
