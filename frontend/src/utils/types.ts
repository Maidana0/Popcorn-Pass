export enum SeatStatus {
    Available = "False",
    Occupied = "True"
  }
  
  export interface Seat {
    id: number;
    occupied: SeatStatus;
    seatNumber: string;
  }
  