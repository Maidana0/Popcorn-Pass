import { fetchData } from '@/utils/fetchData'
import { Button, Container } from '@mui/material'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import SeatSelector from '@/components/molecules/SeatSelector'
import { Seat, SeatStatus } from '@/utils/types'
import CommentList from '@/components/organism/CommentList'


const BackButton = dynamic(() => import('@/components/atoms/BackButton'), { ssr: false })
const MovieDetail = dynamic(() => import('@/components/organism/MovieDetail'), { ssr: true })
type Props = { params: { id: string } }

export const getData = async (id: string) => {
    const res = await fetchData(`movie/${id}`);
    return res;
};

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id } = params
    const { title, releaseDate } = await getData(id)
    return { title: title + " - " + releaseDate.split("-")[0] }
}



const Movie = async ({ params }: Props) => {
    const { id } = params
    const movie = await getData(id)
    // const seats: Seat[] = [
    //     { id: 1, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 2, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 3, seatNumber: "asd", status: SeatStatus.Occupied },
    //     { id: 4, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 5, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 6, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 7, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 8, seatNumber: "asd", status: SeatStatus.Occupied },
    //     { id: 9, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 15, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 11, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 12, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 13, seatNumber: "asd", status: SeatStatus.Occupied },
    //     { id: 14, seatNumber: "asd", status: SeatStatus.Available },
    //     { id: 25, seatNumber: "asd", status: SeatStatus.Available }];
    return <>
        <BackButton />

        <MovieDetail movie={movie} />
        <Container sx={{ mt: 2, mb: 5, width: "fit-content" }}>
            <Button variant="contained" color="warning" size="large" LinkComponent={Link} href={id + '/comprar-entrada'}>
                Comprar Entrada
            </Button>
        </Container>

        <CommentList id={id}/>
        {/* <SeatSelector seats={seats} /> */}
    </>
}

export default Movie