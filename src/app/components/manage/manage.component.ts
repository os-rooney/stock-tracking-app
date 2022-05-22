// Imports dependencies
import { Component, OnInit } from '@angular/core';
import {StocksService} from "../../services/stocks.service";

// Declares component metadata
@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  // Defines class and two properties for storing the array of symbols and a string for input
  symbols?: Array<string>;

  stock: string = "";

  constructor(private service: StocksService) {
    // Gets the current list of symbols during class instantiation
    // This doesn't require the OnInit lifecycle hook, because it's a synchronous request to get data that exists in memory.
    this.symbols = service.get();
  }

  // Method to add a new stock to the list
  add(){
    this.symbols = this.service.add(this.stock.toUpperCase());
  }

  // Method to remove a stock symbol from the list
  remove(symbol:string){
    this.symbols = this.service.remove(symbol);
  }


  ngOnInit(): void {
  }

}
