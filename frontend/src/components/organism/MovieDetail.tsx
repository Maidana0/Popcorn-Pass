"use client"
import HeaderDetail from "../molecules/MovieDetailHeader"
import { Box } from "@mui/material"
import MovieImageDetail from "../atoms/MovieImageDetail"
import MovieDetailContent from "../molecules/MovieDetailContent"
import { FC, useEffect } from "react"
import { fetchData } from "@/utils/fetchData"

const AVERAGE = 4.5

const MovieDetail: FC<{ id: string }> = ({ id }) => {
    useEffect(() => {
        const getMovieDetail = async () => {
            const res = await fetchData("movie/02910fda-9c24-4f99-8813-9b62085f7dfc")
            console.log(res);
        }
        getMovieDetail()
    }, [])

    return (<>
        <Box margin="1.5rem auto">
            <Box sx={{
                width: { xs: "93%", sm: "96%", md: "90%" }, margin: "1rem auto", borderRadius: "16px",
                display: "flex", bgcolor: { sm: "var(--lightBlack)" },
                flexDirection: { xs: "column", sm: "row" }, transition: "width ease .3s"
            }}>
                <MovieImageDetail description={undefined} imagePath={undefined} />

                <Box width={{ xs: "100%", sm: "57%", md: "calc(100% - 290px)" }} display="flex"
                    gap={{ xs: "1rem", sm: "0" }} flexDirection={"column"}
                    justifyContent={{ md: "space-evenly", sm: "space-between" }}>

                    <HeaderDetail
                        releaseDate="26.7.2024"
                        title="Deadpool And Wolverine"
                        runtime="1h30m"
                        vote_average={AVERAGE}
                        vote_count={1.612}
                    />

                    <MovieDetailContent
                        genre={["acción", "comedia"]}
                        censorship={undefined}
                        certification={undefined}
                        original_language={undefined}
                    />

                </Box>
            </Box>



        </Box>
    </>)
}

export default MovieDetail