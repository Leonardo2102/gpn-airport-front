import { Component, OnInit } from '@angular/core';
import { Flight } from '../interfaces/flight';
import { FlightService } from '../Services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css'],
})
export class FlightListComponent implements OnInit {
  Flights: Flight[] = [];
  loading: Boolean = true;

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
}
