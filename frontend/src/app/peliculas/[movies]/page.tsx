import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loader from "@/components/atoms/Loader";
import { fetchData } from "@/utils/fetchData";
import { filteredListComingSoon, filteredListPlayingNow } from "@/utils/fc-movies";
import { IMovie } from "@/common/interface-movie";
import transformMoviesList from "@/utils/THMDB_DTO";
import { getCities } from "@/data/getCinemas";

const MovieFilters = dynamic(() => import("@/components/organism/MovieFilters"), { ssr: false })
const MoviePagination = dynamic(() => import("@/components/atoms/MoviePagination"), { ssr: false })

const PlayingNow = dynamic(() => import("@/components/organism/PlayingNow"), { ssr: false, loading: () => <Loader /> })
const ComingSoon = dynamic(() => import("@/components/organism/ComingSoon"), { ssr: false, loading: () => <Loader /> })

export const revalidate = 3600 * 24 * 7

interface IProps {
    params: {
        movies: "en-pantalla" | "en-estreno"
    },
    searchParams: {
        title: string
    }
}

export const getData = async (): Promise<{ inComingSoon: IMovie[], playingNow: IMovie[] }> => {
    if (process.env.MODE != "only-front") {
        const res = await fetchData("movie/list")
        return {
            inComingSoon: filteredListComingSoon(res.results),
            playingNow: filteredListPlayingNow(res.results)
        }
    } else {
        const date = new Date()
        const currentDate = date.toISOString().split('T')[0];
        const gte = new Date(date.getTime() - 1000 * 60 * 60 * 24 * 30).toISOString().split('T')[0];
        const lte = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 40).toISOString().split('T')[0];

        const regionAndLanguage = "page=1&region=AR&language=es-AR"
        let movies_inComingsoon = await fetchData(`discover/movie?include_adult=true&include_video=false&${regionAndLanguage}&primary_release_date.gte=${currentDate}&primary_release_date.lte=${lte}&sort_by=popularity.desc`)

        let movies_playingNow = await fetchData(`discover/movie?include_adult=true&include_video=false&${regionAndLanguage}&primary_release_date.gte=${gte}&primary_release_date.lte=${currentDate}&sort_by=popularity.desc`)

        movies_inComingsoon = filteredListComingSoon(movies_inComingsoon.results)
        movies_playingNow = filteredListPlayingNow(movies_playingNow.results)
        // console.log("PIDIENDO DATOS ");

        return {
            inComingSoon: transformMoviesList(movies_inComingsoon),
            playingNow: transformMoviesList(movies_playingNow)
        }
    }

}


const Page = async ({ params }: IProps) => {
    const { movies } = params
    const inComingSoon = movies == "en-estreno"
    const cities = !inComingSoon && await getCities()
    const data = await getData()


    if (movies != "en-pantalla" && !inComingSoon) return <h1 style={{ margin: "auto", textAlign: "center" }}>404 - Not Found</h1>

    return (<>
        <Box component="div" width="95%" m="2.5rem auto" display="flex" alignItems="center" gap="1rem"
            sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-between" } }}>

            <Typography variant="h3" component="h1" textAlign={{ xs: "center", md: "left" }}>
                Peliculas Disponibles
            </Typography>

            <Box component="div" textAlign="center">
                <Button color="warning" variant={!inComingSoon ? "contained" : "outlined"} LinkComponent={Link} href={inComingSoon ? "en-pantalla" : "#"}
                    sx={{
                        height: "53px", fontWeight: 700, borderRadius: "8px 0 0 8px",
                        color: !inComingSoon ? "var(--black)" : "",
                    }}>
                    en pantalla
                </Button>

                <Button color="warning" variant={inComingSoon ? "contained" : "outlined"} LinkComponent={Link} href={!inComingSoon ? "en-estreno" : "#"}
                    sx={{
                        height: "53px", fontWeight: 700, borderRadius: "0 8px 8px 0",
                        color: inComingSoon ? "var(--black)" : "",
                    }}>
                    proximamente
                </Button>
            </Box>
        </Box>

        {!inComingSoon && <MovieFilters cities={cities || ["empty"]} />}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: "20px 0", sm: "16px" }, justifyContent: "space-evenly" }} mb="3.5rem">
            {
                inComingSoon
                    ? <ComingSoon movies={data.inComingSoon} />
                    : <PlayingNow movies={data.playingNow} />
            }
        </Box>

        <MoviePagination />
    </>)
}

export default Page