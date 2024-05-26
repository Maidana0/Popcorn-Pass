"use client"
import MovieCard from "../molecules/MovieCard"
import { useRouter, usePathname } from "next/navigation"

const ComingSoon = () => {
    const router = useRouter()
    const path = usePathname().toString()

    const handleClick = () => router.push(path + "/hola")

    return <>
        <MovieCard handleClick={handleClick} isComingSoon={true} />
        <MovieCard isComingSoon={true} />
        <MovieCard isComingSoon={true} />
        <MovieCard isComingSoon={true} />
        <MovieCard isComingSoon={true} />
    </>
}

export default ComingSoon