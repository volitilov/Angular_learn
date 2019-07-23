import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit, OnChanges {
  @Input() carItem: any;
  @Input() name: string;
  @Output() deleteCar = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // console.log('onChanges', changes);
    // if (changes.name.currentValue !== changes.name.previousValue) {
    //   console.log(true);
    // }
  }

  onDeleteCar() {
    this.deleteCar.emit(this.carItem);
  }

}
