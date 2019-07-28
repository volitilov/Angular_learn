import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));

  constructor() { }

  ngOnInit() {
  }

}
