"use client"
import MovieCard from "../molecules/MovieCard"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { convertGenre } from "@/utils/fc-movies"
import { IMovie } from "@/common/interfaces"
import { useMoviesPagination } from "@/store/cspagination-store"
import { shallow } from "zustand/shallow"

const PlayingNow = ({ movies }: { movies: IMovie[] }) => {
    const router = useRouter()
    const ITEMS_PER_PAGES = 10
    const { page, setTotalPages } = useMoviesPagination(state => (
        { page: state.page, setTotalPages: state.setTotalPages }
    ), shallow)
    console.log(movies);
    
    useEffect(() => {
        const totalMovies = movies.length;
        const totalPages = Math.ceil(totalMovies / ITEMS_PER_PAGES);
        setTotalPages(totalPages);
    }, []);

    const handleClick = (id: string) => router.push("/pelicula/" + id)

    const startIndex = (page - 1) * ITEMS_PER_PAGES;
    const endIndex = startIndex + ITEMS_PER_PAGES;
    const currentMovies = movies.slice(startIndex, endIndex);

    return <>
        {currentMovies.map((data: IMovie, i: number) => (
            <MovieCard key={i} handleClick={handleClick}
                id={data.id}
                nameMovie={data.title}
                textVideo={convertGenre(data.genre)}
                imagePath={data.image}
            />
        ))}
    </>
}

export default PlayingNow