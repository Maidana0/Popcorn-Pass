

export interface ISeat {
    currentUser: null,
    functionDetailsId: string,
    id: string,
    occupied: boolean,
    reservationTime: null,
    seatEnum: string,
    seatNumber: string,
    ticket: null
}



export default interface IFunctionDetail  {
    movieId: string;
    schedule: string;
    screenId: string;
    seatList: ISeat[]
}
