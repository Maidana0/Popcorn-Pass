"use client"
import MovieCard from "../molecules/MovieCard"
import { useRouter } from "next/navigation"

const ComingSoon = () => {
    const router = useRouter()

    const handleClick = (id: string) => router.push("/pelicula/" + id)

    return <>
        <MovieCard id={"1"} handleClick={handleClick} isComingSoon={true} />
        <MovieCard id={"2"} handleClick={handleClick} isComingSoon={true} />
        <MovieCard id={"3"} handleClick={handleClick} isComingSoon={true} />
        <MovieCard id={"4"} handleClick={handleClick} isComingSoon={true} />
        <MovieCard id={"5"} handleClick={handleClick} isComingSoon={true} />
    </>
}

export default ComingSoon