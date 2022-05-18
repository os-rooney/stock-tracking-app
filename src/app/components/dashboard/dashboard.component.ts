import { Component, OnInit } from '@angular/core';
import {StockInterface, StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// Exports the component class, but also implements the OnInit interface
export class DashboardComponent implements OnInit {
  // Declares a property for holding an array of stocks
  stocks?:Array<StockInterface>;
  // Declares a property for holding an array of stock symbols
  symbols: Array<string>;

  constructor(private service:StocksService) {
    // Gets the stock symbols from the service when the component is first constructed
    this.symbols = service.get();
  }
  // Implements the ngOnInit method and calls the service to load stock data over Http
  ngOnInit(): void {
    this.service.load(this.symbols)
      ?.subscribe(stocks => this.stocks = stocks);
  }
}
