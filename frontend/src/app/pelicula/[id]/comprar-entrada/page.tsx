import type { Metadata } from 'next'
import { getData } from '../page'
import { Container } from '@mui/material'
import SelectScreen from '@/components/organism/SelectScreen'

type Props = { params: { id: string } }

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id } = params
    const { title } = await getData(id)
    return { title: "Entradas para " + title, }
}

const Movie = async ({ params }: Props) => {
    const { id } = params
    const movie = await getData(id)


    return <Container sx={{ "& > p": { my: 3 }, display:"flex" }}>
    
        <h1>
            PELICULA
        </h1>
        <h2>{(movie.title).toUpperCase()}</h2>

        <SelectScreen />
    </Container>
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