import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(value: any, powNumber = 1): any {
    return value * powNumber + ' год.';
  }

}
