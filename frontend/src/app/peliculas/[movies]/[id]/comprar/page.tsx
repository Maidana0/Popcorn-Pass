import { Metadata } from "next"
import { Props, getData } from "../page"
import { Container, Typography } from "@mui/material"
import dynamic from "next/dynamic"

const BackButton = dynamic(() => import('@/components/atoms/BackButton'), { ssr: false })
const MovieDetail = dynamic(() => import('@/components/organism/MovieDetail'), { ssr: true })

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id } = params
    const { title } = await getData(id)
    return { title: title + " - Compra tu entrada en PopcornPass" }
}


const Comprar = async ({ params }: Props) => {
    const movie = await getData(params.id)
    return (
        <>
            <BackButton />
            <Typography variant="h4" component="h1" px={3} textAlign={{ xs: "center", md: "left" }}>
                Compra tus entradas para ver {movie.title}!
            </Typography>

            <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: "1.4rem" }}>
                - INFORMACION DE LA PELICULA SELECCIONADA
                - MOSTRAR PRECIO DE ENTRADAS
                - SELECCIONAR CANTIDAD DE ENTRADAS
                - CODIGOS DE DESCUENTOS
                - PROMOCIONES?

                <MovieDetail smallComponent movie={movie} />
            </Container>

        </>
    )
}

export default Comprar