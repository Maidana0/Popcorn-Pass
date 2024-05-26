"use client"
import MovieCard from "../molecules/MovieCard"
import { useRouter } from "next/navigation"

const PlayingNow = () => {
    const router = useRouter()

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