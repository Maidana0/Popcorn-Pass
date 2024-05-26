import BackButton from '@/components/atoms/BackButton'
import { Container } from '@mui/material'
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
    return (
        <Container>
            <BackButton />
            <h1>{id}</h1>
        </Container>
    )
}

export default Movie