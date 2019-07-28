import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarsService } from '../../services/cars/cars.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @ViewChild('carName', {static: true}) carName: ElementRef;
  @ViewChild('carYear', {static: true}) carYear: ElementRef;
  @ViewChild('searchText', {static: true}) searchText: ElementRef;

  cars = [];

  constructor(
    private carsServices: CarsService
  ) { }

  ngOnInit() {
    this.cars = this.carsServices.getCars();
  }

  addCar() {
    if (this.carName.nativeElement.value) {
      const cars = this.carsServices.getCars();
      const car = {
        id: cars.length + 1,
        name: this.carName.nativeElement.value,
        year: this.carYear.nativeElement.value,
        isSold: false
      };

      this.carsServices.addCar(car);
    }

    this.carName.nativeElement.value = '';
    this.carYear.nativeElement.value = '';
  }
}
