import { Injectable } from '@angular/core';
import { LogService } from '../../services/log/log.service';


export interface Car {
  id: number;
  name: string;
  year: number;
  isSold: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      name: 'Ford',
      year: 1990,
      isSold: false
    }
  ];

  constructor(
    private logService: LogService
  ) { }

  addCar(car: Car) {
    this.cars.push(car);
    this.logService.log(`add car: ${car.id}`);
  }

  getCars() {
    return this.cars;
  }

  deleteCar(car: Car) {
    this.cars = this.cars.filter(item => item.id !== car.id);
    this.logService.log(`delete car: ${car.id}`);
  }

  bayCar(car: Car) {
    this.cars.forEach(carItem => {
      if (car.id === carItem.id ) {
        car.isSold = true;
        this.logService.log(`bay car: ${car.id}`);
      }
    });
  }

  returnCar(car) {
    this.cars.forEach(carItem => {
      if (car.id === carItem.id ) {
        car.isSold = false;
        this.logService.log(`return car: ${car.id}`);
      }
    });
  }
}
