import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAvailable'
})
export class FilterAvailablePipe implements PipeTransform {

  transform(values: any[], filter: boolean): any[] {
    return filter ? values.filter(v => v.available) : values;
  }

}
