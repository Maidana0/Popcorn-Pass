"use client"
import MovieCard from "../molecules/MovieCard"
import { useRouter, usePathname } from "next/navigation"

const PlayingNow = () => {
    const router = useRouter()
    const path = usePathname().toString()

    const handleClick = () => router.push(path + "/hola")

    return <>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
    </>
}

export default PlayingNow