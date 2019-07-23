import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(carList: any, searchText: string) {
    if (carList.length === 0 || searchText === '') {
      return carList;
    }
    return carList.filter(car => car.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
