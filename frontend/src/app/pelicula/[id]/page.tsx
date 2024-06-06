import { fetchData } from '@/utils/fetchData'
import { Button, Container } from '@mui/material'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'

const BackButton = dynamic(() => import('@/components/atoms/BackButton'), { ssr: false })
const MovieDetail = dynamic(() => import('@/components/organism/MovieDetail'), { ssr: true })
type Props = { params: { id: string } }

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id } = params
    const { title, releaseDate } = await getData(id)
    return { title: title + " - " + releaseDate.split("-")[0] }
}

export const getData = async (id: string) => {
    const res = await fetchData(`movie/${id}`);
    return res;
};

const Movie = async ({ params }: Props) => {
    const { id } = params
    const movie = await getData(id)
    return <>
        <BackButton />

        <MovieDetail movie={movie} />
        <Container sx={{ mt: 2, mb: 5, width: "fit-content" }}>
            <Button variant="contained" color="warning" size="large" LinkComponent={Link} href={id + '/comprar-entrada'}>
                Comprar Entrada
            </Button>
        </Container>

    </>
}

export default Movie