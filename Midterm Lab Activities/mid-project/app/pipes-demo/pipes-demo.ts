import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  SlicePipe,
  UpperCasePipe,
  PercentPipe,
  TitleCasePipe,
  KeyValuePipe,
  NgFor
} from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    SlicePipe,
    AsyncPipe,
    DecimalPipe,
    PercentPipe,
    TitleCasePipe,
    KeyValuePipe,
    NgFor
  ],
  templateUrl: './pipes-demo.html',
  styleUrls: ['./pipes-demo.css']
})
export class PipesDemo {
  // DatePipe
  presentDate: Date = new Date();

  // CurrencyPipe
  price: number = 20000;

  // AsyncPipe (live time)
  time$ = interval(1000).pipe(map(() => new Date()));

  // SlicePipe
  fruits: string[] = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];

  // DecimalPipe
  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  // PercentPipe
  percentValue: number = 0.256; // 25.6%

  // TitleCasePipe
  sampleText: string = 'angular pipes demo';

  // KeyValuePipe
  person: Record<string, any> = {
    Name: 'Cassandra Aubrey R. Arcilla',
    Age: 21,
    City: 'Angeles City'
  };
}
