
import BackButton from '@/components/atoms/BackButton'
import MovieDetail from '@/components/organism/MovieDetail'
import { fetchData } from '@/utils/fetchData'
import type { Metadata } from 'next'
import CommentList from '@/components/organism/CommentList'


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
    return <>
        <BackButton />

        <MovieDetail movie={movie} />

        <CommentList/>
    </>
}

export default Movie