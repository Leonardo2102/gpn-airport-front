export interface Flight {
  id?: string;
  flightNumber: string;
  origin: string;
  destination: string;
  departure: Date;
  arrival: Date;
  price: number;
  duration: string;
  freeSeats: number;
  fligthDate: Date;
}
