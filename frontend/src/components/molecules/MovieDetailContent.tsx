import { Box } from "@mui/material"
import MovieInfoDetail from "../atoms/MovieInfoDetail"
import { IMovieInfoDetail } from "@/common/interfaces"
import { FC } from "react"
import MovieDescriptionDetail from "../atoms/MovieDescriptionDetail"

const MovieDetailContent: FC<IMovieInfoDetail> = ({ genre, censorship, certification, original_language }) => {
    return (
        <>
            <MovieInfoDetail
                genre={genre}
                censorship={censorship ?? "+16"}
                certification={certification ?? "+16"}
                original_language={original_language ?? "ingés"}
            />

            {/* DESCRIPCION */}
            <MovieDescriptionDetail
                description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maiores ut libero amet porro, excepturi minus? Ut et provident cumque fugiat, hic aliquam commodi qui eos cupiditate corrupti quaerat eaque."}
            />
        </>
    )
}

export default MovieDetailContent