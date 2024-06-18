import { Box, Typography } from "@mui/material"

export const metadata = {
    title: "Cines - PopcornPass",
    description: "Echale un vistazo a los cines adheridos a PopcornPass, dónde encontrarás las mejores promociones y descuentos para tus entradas!",
}

const page = () => {
    return (
        <Box>
            <Typography variant="h3" component="h1" textAlign={{ xs: "center", md: "left" }}>
                Cines Asociados
            </Typography>
        </Box>
    )
}

export default page