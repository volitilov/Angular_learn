import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatOptionModule, MatFormFieldModule, MatSelectModule,
  MatButtonModule, MatInputModule, MatListModule, MatTooltipModule, MatIconModule,
  MatCardModule, MatGridListModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { HeaderComponent } from './components/header/header.component';

import { BackgroundDirective } from './directives/background.directive';
import { PowPipe } from './pipes/pow.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    HeaderComponent,
    BackgroundDirective,
    PowPipe,
    CarFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule
    MatToolbarModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
