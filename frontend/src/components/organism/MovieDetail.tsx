import HeaderDetail from "../molecules/HeaderDetail"
import { Box } from "@mui/material"
import ImageDetail from "../atoms/ImageDetail"

const AVERAGE = 4.5

const MovieDetail = () => {

    return (
        <Box margin="1.5rem auto">
            <Box sx={{
                width:"90%", margin:"1rem auto", borderRadius:"16px",
                display: "flex", bgcolor:{sm:"var(--lightBlack)"},
                flexDirection: { xs: "column", sm: "row" },
            }}>
                <ImageDetail />
                <HeaderDetail
                    releaseDate="26.7.2024"
                    title="Deadpool And Wolverine"
                    runtime="1h30m"
                    vote_average={AVERAGE}
                    vote_count={1.612}
                />

                {/* RESTO DE COMPONENTES / GENEROS, LENGUAJE, EDAD?, DESCRIPCION */}
            </Box>


        
        </Box>
    )
}

export default MovieDetail