import { fetchData } from '@/utils/fetchData'
import { Container, Typography } from '@mui/material'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import CommentList from '@/components/organism/commentList'
import SeatSelector from '@/components/molecules/SeatSelector'
import { Seat, SeatStatus } from '@/utils/types'
import { getCities } from '@/app/peliculas/[movies]/page'
import IFunctionDetail from '@/common/interface-functionDetail'

const SelectCine = dynamic(() => import('@/components/molecules/SelectCine'), { ssr: false })
const BackButton = dynamic(() => import('@/components/atoms/BackButton'), { ssr: false })
const MovieDetail = dynamic(() => import('@/components/organism/MovieDetail'), { ssr: true })
const SelectRom = dynamic(() => import('@/components/organism/SelectFunction'), { ssr: true })
export type Props = { params: { id: string, movies: string } }

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id } = params
    const { title } = await getData(id)
    return { title: title + " - PopcornPass" }
}
export const getData = async (id: string) => await fetchData(`movie/${id}`);
const getFunctionDetail = async (movieId: string) => await fetchData(`functionDetails/functionDetailsByMovieId/${movieId}`);
// /functionDetails/functionDetailsByMovieId/{movieId}
// /functionDetails/functionDetailsByCinemaIdAndMovieId/{cinemaId}/{movieId}           



const Movie = async ({ params }: Props) => {
    const { id, movies } = params
    const cities = await getCities()
    const movie = await getData(id)
    const listFunctionDetail: IFunctionDetail[] = await getFunctionDetail(id)
    return <>
        <BackButton />
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: "1.4rem" }}>
            <Typography variant="h4" component="h1" textAlign={{ xs: "center", md: "left" }}>
                ¿Qué esperas para ver {movie.title}?
            </Typography>
            <SelectCine cities={cities} />
        </Container>
        <MovieDetail movie={movie} />
        {
            movies == "en-pantalla" && <SelectRom listFunctionDetail={listFunctionDetail} />
        }
        {/* <CommentList id={id}/> */}
    </>
}

export default Movie