
import BackButton from '@/components/atoms/BackButton'
import MovieDetail from '@/components/organism/MovieDetail'
import { fetchData } from '@/utils/fetchData'
import type { Metadata } from 'next'
import CommentList from '@/components/organism/commentList'
import SeatSelector from '@/components/molecules/SeatSelector'
import { Seat, SeatStatus } from '@/utils/types'


type Props = {
    params: { id: string }
}

export async function generateMetadata(
    { params }: Props): Promise<Metadata> {
    const { id } = params

    return {
        title: id,
    }
}
const getData = async (id: string) => {
    const res = await fetchData(`movie/${id}`);
    return res;
};

const Movie = async ({ params }: Props) => {
    const { id } = params
    const movie = await getData(id)
    const seats: Seat[] = [
        { id: 1,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 2,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 3,seatNumber:"asd", occupied: SeatStatus.Occupied },
        { id: 4,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 5,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 6,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 7,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 8,seatNumber:"asd", occupied: SeatStatus.Occupied },
        { id: 9,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 15,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 11,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 12,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 13,seatNumber:"asd", occupied: SeatStatus.Occupied },
        { id: 14,seatNumber:"asd", occupied: SeatStatus.Available },
        { id: 25,seatNumber:"asd", occupied: SeatStatus.Available }];
    return <>
        <BackButton />

        <MovieDetail movie={movie} />
        <SeatSelector seats={seats} />
    </>
}

export default Movie