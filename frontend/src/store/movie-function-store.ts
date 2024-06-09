import { createWithEqualityFn } from 'zustand/traditional';
import IFunctionDetail from '@/common/interface-functionDetail';
import { IMovie } from '@/common/interface-movie';
import { persist, createJSONStorage } from 'zustand/middleware'

interface IMovieFunction {
    movieFunctionDetail: false | IFunctionDetail,
    setMovieFunctionDetail: (functionDetail: false | IFunctionDetail) => void,

    currentMovie: false | IMovie,
    setCurrentMovie: (movie: false | IMovie) => void,

    numberSeats: number
    setNumberSeats: (number: number) => void,

    selectedSeats: string[],
    handleSeatClick: (seatNumber: string) => void;
    removeLastSelectedSeat: () => void;
}

export const UseMoviefunction = createWithEqualityFn<IMovieFunction>()(
    persist(
        (set) => ({
            movieFunctionDetail: false,
            setMovieFunctionDetail: (newFunction) => set(() => ({ movieFunctionDetail: newFunction })),


            currentMovie: false,
            setCurrentMovie: (newMovie) => set(() => ({ currentMovie: newMovie })),


            numberSeats: 1,
            setNumberSeats: (num: number) => set({ numberSeats: num }),


            selectedSeats: [],
            handleSeatClick: (seatNumber: string) => {
                set((state) => {
                    const { selectedSeats, numberSeats } = state;
                    if (selectedSeats.includes(seatNumber)) {
                        return { selectedSeats: selectedSeats.filter(seat => seat !== seatNumber) };
                    } else if (selectedSeats.length < numberSeats) {
                        return { selectedSeats: [...selectedSeats, seatNumber] };
                    } else {
                        return { selectedSeats: [...selectedSeats.slice(1), seatNumber] };
                    }
                });
            },
            removeLastSelectedSeat: () => {
                set((state) => {
                    const { selectedSeats } = state;
                    return { selectedSeats: selectedSeats.slice(0, -1) };
                });
            }
        }),
        {
            name: "functionDetail",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)