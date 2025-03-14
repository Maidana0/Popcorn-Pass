import { Metadata } from "next"
import { Props, getData } from "../page"
import { Box, Container, Typography } from "@mui/material"
import dynamic from "next/dynamic"
import Seats from "@/components/organism/Seats"
import GenerateTicket from "@/components/organism/GenerateTicket"

const MovieDetail = dynamic(() => import('@/components/organism/MovieDetail'), { ssr: true })

export const generateMetadata = async (
    { params }: Props): Promise<Metadata> => {
    const { id, movies } = params
    const { title } = await getData(id, movies)
    return { title: title + " - Compra tu entrada en PopcornPass" }
}


const Comprar = async ({ params }: Props) => {
    const { id, movies } = params
    const movie = await getData(id, movies)

    return (
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" }, gap: "1.5rem" }}  >

            <Box display="flex" flexDirection="column" gap="1rem">
                <Typography variant="h4" component="h1" textAlign={{ xs: "center", md: "left" }} p={1}>
                    {movie.title}
                </Typography>
                <Seats />
            </Box>

            <Box display="flex" flexDirection="column" gap="1.5rem">
                <MovieDetail smallComponent movie={movie} />
                <GenerateTicket movie={movie} />
            </Box>

        </Container>
    )
}

export default Comprar