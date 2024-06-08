import { createWithEqualityFn } from 'zustand/traditional';
import { persist, createJSONStorage } from 'zustand/middleware'
import { IMovie } from '@/common/interface-movie';


interface ICinemaState {
    currentCity: string;
    setCurrentCity: (newValue: string) => void;

    currentCinema: string;
    setCurrentCinema: (newValue: string) => void,

    moviesByCinema: false | IMovie[],
    setMoviesByCinema: (newValue: IMovie[]) => void
}


export const useCinemaStore = createWithEqualityFn<ICinemaState>()(
    persist(
        (set, get) => ({
            currentCity: "empty",
            setCurrentCity: (newValue) => {
                const { currentCity } = get()
                if (newValue == currentCity && newValue == "empty") return;
                set(() => ({ currentCity: newValue }))
            },

            currentCinema: "empty",
            setCurrentCinema: (newValue) => {

                const { currentCinema } = get()
                if (newValue == currentCinema) return;
                set(() => ({ currentCinema: newValue }))
            },

            moviesByCinema: false,
            setMoviesByCinema: (newValue) => set(() => ({ moviesByCinema: newValue }))
        }),
        {
            name: "cinema",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)