"use client"
import { FC, useEffect } from "react";
import MovieCard from "../molecules/MovieCard";
import { useRouter } from "next/navigation";
import { convertGenre } from "@/utils/fc-movies";
import { useMoviesPagination } from "@/store/cspagination-store";
import { shallow } from "zustand/shallow";
import { IMovie } from "@/common/interfaces";


const ComingSoon: FC<{ movies: IMovie[] }> = ({ movies }) => {
    const router = useRouter();
    const { page, setTotalPages, setPage } = useMoviesPagination(state => (
        { page: state.page, setTotalPages: state.setTotalPages, setPage:state.setPage }
    ), shallow)

    const ITEMS_PER_PAGES = 10;
    const handleClick = (id: string) => router.push("/pelicula/" + id);

    useEffect(() => {
        const totalMovies = movies.length;
        const totalPages = Math.ceil(totalMovies / ITEMS_PER_PAGES);
        setTotalPages(totalPages);
        setPage(1)
    }, []);



    const startIndex = (page - 1) * ITEMS_PER_PAGES;
    const endIndex = startIndex + ITEMS_PER_PAGES;
    const currentMovies = movies.slice(startIndex, endIndex);

    return (
        <>
            {currentMovies.map((data: IMovie) => (
                <MovieCard
                    key={data.id}
                    isComingSoon={true}
                    handleClick={handleClick}
                    id={data.id}
                    nameMovie={data.title}
                    textCalendar={data.releaseDate}
                    textVideo={convertGenre(data.genre)}
                    imagePath={data.image}
                />
            ))}
        </>
    );
};


export default ComingSoon