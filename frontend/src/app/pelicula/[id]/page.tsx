import BackButton from '@/components/atoms/BackButton'
import MovieDetail from '@/components/organism/MovieDetail'
import { Box, Container } from '@mui/material'
import type { Metadata } from 'next'

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


const Movie = ({ params }: Props) => {
    const { id } = params
    return <>
        <BackButton />

        <MovieDetail />
    </>
}

export default Movie