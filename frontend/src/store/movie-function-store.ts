import { createWithEqualityFn } from 'zustand/traditional';
import IFunctionDetail from '@/common/interface-functionDetail';
import { IMovie } from '@/common/interface-movie';
import { persist, createJSONStorage } from 'zustand/middleware'

interface IMovieFunction {
    movieFunctionDetail: false | IFunctionDetail,
    setMovieFunctionDetail: (functionDetail: false | IFunctionDetail) => void,

    currentMovie: false | IMovie,
    setCurrentMovie: (movie: false | IMovie) => void
}

export const UseMoviefunction = createWithEqualityFn<IMovieFunction>()(
    persist(
        (set) => ({
            movieFunctionDetail: false,
            setMovieFunctionDetail: (newFunction) => set(() => ({ movieFunctionDetail: newFunction })),


            currentMovie: false,
            setCurrentMovie: (newMovie) => set(() => ({ currentMovie: newMovie }))
        }),
        {
            name: "functionDetail",
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)