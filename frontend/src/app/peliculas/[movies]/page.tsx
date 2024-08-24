import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loader from "@/components/atoms/Loader";
import { fetchData } from "@/utils/fetchData";
import { filteredListComingSoon, filteredListPlayingNow } from "@/utils/fc-movies";
import { IMovie } from "@/common/interface-movie";

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

const getData = async (): Promise<{ inComingSoon: IMovie[], playingNow: IMovie[] }> => {
    if (process.env.MODE != "only-front") {
        const res = await fetchData("movie/list")
        return {
            inComingSoon: filteredListComingSoon(res.results),
            playingNow: filteredListPlayingNow(res.results)
        }
    } else {
        const date = new Date()
        const currentDate = date.toISOString().split('T')[0];
        const gte = new Date(date.getTime() - 1000 * 60 * 60 * 24 * 7).toISOString().split('T')[0];
        const lte = new Date(date.getTime() + 1000 * 60 * 60 * 24 * 14).toISOString().split('T')[0];

        const regionAndLanguage = "page=1&region=AR&language=es-AR"
        const movies_inComingsoon = await fetchData(`discover/movie?include_adult=true&include_video=false&${regionAndLanguage}&primary_release_date.gte=${currentDate}&primary_release_date.lte=${lte}&sort_by=popularity.desc`)

        const movies_playingNow = await fetchData(`discover/movie?include_adult=true&include_video=false&${regionAndLanguage}&primary_release_date.gte=${gte}&primary_release_date.lte=${currentDate}&sort_by=popularity.desc&vote_average.gte=6`)

        return {
            inComingSoon: filteredListComingSoon(movies_inComingsoon.results),
            playingNow: filteredListPlayingNow(movies_playingNow.results)
        }
    }

}

export const getCities = async (): Promise<string[]> => await fetchData("cinema/cities", "GET");

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

        {/* {!inComingSoon && <MovieFilters cities={cities || ["empty"]} />} */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: { xs: "20px 0", sm: "16px" }, justifyContent: "space-evenly" }} mb="3.5rem">
            {/* {inComingSoon
                ? <ComingSoon movies={data.inComingSoon} />
                : <PlayingNow movies={data.playingNow} />} */}

            {
                inComingSoon
                    ? JSON.stringify(data.inComingSoon)
                    : JSON.stringify(data.playingNow)
            }

        </Box>

        <MoviePagination />
    </>)
}

export default Page