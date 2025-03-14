import IFunctionDetail, { ISeat } from '@/common/interface-functionDetail';

const generateSeats = (functionDetailsId: string): ISeat[] => {
    const seats: ISeat[] = [];
    const rows = 'ABCDEF'; // Filas de la A a la H
    const columns = 7; // Columnas de 1 a 7

    let seatId = 1;
    for (let row of rows) {
        for (let col = 1; col <= columns; col++) {
            const isOccupied = Math.random() < 0.5; // 50% de probabilidad de estar ocupado
            seats.push({
                currentUser: isOccupied ? `user${seatId}` : null,
                functionDetailsId,
                id: `seat${seatId}`,
                occupied: isOccupied,
                reservationTime: isOccupied ? new Date().toISOString() : null,
                seatEnum: isOccupied ? 'OCCUPIED' : 'FREE',
                seatNumber: `${row}${col}`,
                ticket: isOccupied ? `ticket${seatId}` : null
            });
            seatId++;
        }
    }
    return seats;
};

const generateFunctionDetails = (movieId: string, screenId: string, daysFromNow: number, functionCount: number): IFunctionDetail[] => {
    const functionDetails: IFunctionDetail[] = [];
    const today = new Date();
    for (let i = 0; i < functionCount; i++) {
        const schedule = new Date(today);
        schedule.setDate(today.getDate() + daysFromNow);
        schedule.setHours(17 + i * 2, 0, 0, 0); // 17:00, 19:00, 21:00, 23:00

        functionDetails.push({
            movieId,
            schedule: schedule.toISOString(),
            screenId,
            seatsList: generateSeats(`func${daysFromNow}-${i}`)
        });
    }
    return functionDetails;
};

const functionDetails: IFunctionDetail[] = [
    ...generateFunctionDetails('fakeMovie', '1', 0, 4),
    ...generateFunctionDetails('fakeMovie', '2', 1, 4),
    ...generateFunctionDetails('fakeMovie', '3', 2, 4),
    ...generateFunctionDetails('fakeMovie', '4', 3, 4)
];

export default functionDetails;