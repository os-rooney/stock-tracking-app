import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  // Declares a property that is an input value
  @Input() stock: any;

  constructor() { }

  ngOnInit(): void {
  }

  // Method to check if stock is negative
  isNegative(){
    return (this.stock && this.stock.change < 0);
  }

  // Method to check if stock is positive
  isPositive(){
    return (this.stock && this.stock.change > 0);
  }

}
