import { Component, OnInit } from '@angular/core';
import { Flight } from '../interfaces/flight';
import { FlightService } from '../Services/flight.service';
import { FlightFilters } from '../interfaces/flightFilter';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  Flights: Flight[] = [];
  ReturnFlights: Flight[] = [];
  loading: Boolean = true;
  loading2: Boolean = false;
  DateP1: string = '';
  DateP2: string = '';
  Origin: string = '';
  Destination: string = '';
  RoundTrip: Boolean = true;

  constructor(private flightService: FlightService) {
    this.getFlights();
  }

  ngOnInit(): void {}

  getFlights() {
    this.flightService.get().subscribe((result) => {
      this.Flights = result;
      console.log(this.Flights);
      this.loading = false;
    });
  }

  searchOneWay(Origin: string, Destination: string, flightDate: string) {
    this.loading = true;
    let filters: FlightFilters = {
      origin: Origin,
      destination: Destination,
      date: new Date(flightDate),
    };
    console.log(filters);
    this.flightService.getFiltered(filters).subscribe((result) => {
      this.Flights = result;
      console.log(this.Flights);
      this.loading = false;
    });
  }

  searchRound(
    Origin: string,
    Destination: string,
    departureDate: string,
    returnDate: string
  ) {
    let filtersDeparture: FlightFilters = {
      origin: Origin,
      destination: Destination,
      date: new Date(departureDate),
    };
    console.log(filtersDeparture);
    this.flightService.getFiltered(filtersDeparture).subscribe((result) => {
      this.Flights = result;
      console.log(this.Flights);
      this.loading = false;
    });
    let filtersReturn: FlightFilters = {
      origin: Destination,
      destination: Origin,
      date: new Date(returnDate),
    };
    console.log(filtersReturn);
    this.flightService.getFiltered(filtersReturn).subscribe((result) => {
      this.ReturnFlights = result;
      console.log(this.ReturnFlights);
      this.loading = false;
    });
  }
}
