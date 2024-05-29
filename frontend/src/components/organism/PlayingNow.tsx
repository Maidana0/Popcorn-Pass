"use client"
import { useMoviesState } from "@/store/movies-store"
import MovieCard from "../molecules/MovieCard"
import { useRouter } from "next/navigation"
import { shallow } from "zustand/shallow"

const PlayingNow = () => {
    const router = useRouter()
    const { movies } = useMoviesState(state => ({ movies: state.movies }), shallow)
    const handleClick = (id: string) => router.push("/pelicula/" + id)

    return <>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </>
}

export default PlayingNow