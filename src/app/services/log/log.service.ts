import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  activeLog = true;

  constructor() { }

  log(data: any) {
    if (this.activeLog) {
      console.log(`%c ${data}`, 'color: green; font-weight: bold;');
    }
  }
}
