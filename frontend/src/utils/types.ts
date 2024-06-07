export enum SeatStatus {
    Available = "Available",
    Occupied = "Occupied"
  }
  
  export interface Seat {
    id: number;
    status: SeatStatus;
    seatNumber: string;
  }
  