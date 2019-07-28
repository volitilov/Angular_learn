import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CarsService } from '../../services/cars/cars.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnChanges {
  @Input() carItem: any;
  @Input() name: string;

  constructor(
    private carsServices: CarsService
  ) { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log('onChanges', changes);
    // if (changes.name.currentValue !== changes.name.previousValue) {
    //   console.log(true);
    // }
  }

  onDeleteCar() {
    this.carsServices.deleteCar(this.carItem);
  }

  onBayCar() {
    this.carsServices.bayCar(this.carItem);
  }

  onReturnCar() {
    this.carsServices.returnCar(this.carItem);
  }
}
