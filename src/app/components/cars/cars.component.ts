import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


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
  title: string;
  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));

  constructor() { }

  ngOnInit() {
    this.cars = [
      {
        id: 1,
        name: 'Ford',
        year: 1990
      }
    ];
  }

  addCar() {
    if (this.carName.nativeElement.value) {
      this.cars.push({
        id: this.cars.length + 1,
        name: this.carName.nativeElement.value,
        year: this.carYear.nativeElement.value
      });
    }

    this.carName.nativeElement.value = '';
    this.carYear.nativeElement.value = '';
  }

  onDeleteCar(car) {
    this.cars = this.cars.filter(item => item.id !== car.id);
  }
}
