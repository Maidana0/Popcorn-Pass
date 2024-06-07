import type { Metadata } from 'next'
import { getData } from '../page'
import { Container } from '@mui/material'
import { getCities } from '@/app/peliculas/[movies]/page'
import dynamic from 'next/dynamic'
const BackButton = dynamic(() => import('@/components/atoms/BackButton'), { ssr: false })
const SelectCine = dynamic(() => import('@/components/molecules/SelectCine'), { ssr: false })
const SelectScreen = dynamic(() => import('@/components/organism/SelectScreen'), { ssr: false })

type Props = { params: { id: string } }

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id } = params
    const { title } = await getData(id)
    return { title: "Entradas || " + title, }
}

const Movie = async ({ params }: Props) => {
    const { id } = params
    const movie = await getData(id)
    const cities = await getCities()

    return <>
        <BackButton />

        <Container sx={{ "& > p": { my: 3 }, display: "flex", flexDirection: "column" }}>
            <h1>
                PELICULA
            </h1>
            <h2>{(movie.title).toUpperCase()}</h2>

            <SelectCine cities={cities} />
            <SelectScreen />

        </Container>
    </>
}

export default Movie
// MOVIESBYCINE/{ID}
// 

/* 
horario
pelicula
screenId
seatsList

*/