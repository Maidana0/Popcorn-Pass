import { fetchData } from '@/utils/fetchData'
import { Container, Typography } from '@mui/material'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { getCities, getData as getAllDataMovies } from '@/app/peliculas/[movies]/page'
import IFunctionDetail from '@/common/interface-functionDetail'
import ComentariosFicticios from '@/components/organism/ComentariosFicticios'

const SelectCine = dynamic(() => import('@/components/molecules/SelectCine'), { ssr: false })
const BackButton = dynamic(() => import('@/components/atoms/BackButton'), { ssr: false })
const MovieDetail = dynamic(() => import('@/components/organism/MovieDetail'), { ssr: true })
const SelectRom = dynamic(() => import('@/components/organism/SelectFunction'), { ssr: true })
export type Props = { params: { id: string, movies: string } }

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id, movies } = params
    const { title } = await getData(id, movies)
    return { title: title + " - PopcornPass" }
}

export const getData = async (id: string, movies?: string) => {
    if (process.env.MODE != "only-front") {
        return await fetchData(`movie/${id}`)
    } else if (movies) {
        const data = await getAllDataMovies()
        if (movies == "en-pantalla") return data.playingNow.find(movie => movie.id == id)
        return data.inComingSoon.find(movie => movie.id == id)
    }
};
const getFunctionDetail = async (movieId: string) => await fetchData(`functionDetails/functionDetailsByMovieId/${movieId}`);


const Movie = async ({ params }: Props) => {
    const { id, movies } = params
    // const cities = await getCities()
    const movie = await getData(id, movies)
    // const listFunctionDetail: IFunctionDetail[] = await getFunctionDetail(id)
    return <>
        <BackButton />
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: "1.4rem" }}>
            <Typography variant="h4" component="h1" textAlign={{ xs: "center", md: "left" }}>
                ¿Qué esperas para ver {movie.title}?
            </Typography>
            {/* <SelectCine cities={cities} /> */}
        </Container>
        <MovieDetail movie={movie} />
        {/* {
            movies == "en-pantalla" && <SelectRom listFunctionDetail={listFunctionDetail} />
        } */}
        <ComentariosFicticios />
    </>
}

export default Movie