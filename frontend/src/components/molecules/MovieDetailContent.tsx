import MovieInfoDetail from "../atoms/MovieInfoDetail"
import { IMovieInfoDetail } from "@/common/interfaces"
import { FC } from "react"

const MovieDetailContent: FC<IMovieInfoDetail> = ({ genre, censorship, certification, original_language }) => {
    return (
        <MovieInfoDetail
            genre={genre}
            censorship={censorship ?? "+16"}
            certification={certification ?? "+16"}
            original_language={original_language ?? "ingés"}
        />
    )
}

export default MovieDetailContent