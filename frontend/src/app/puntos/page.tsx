import MoviePoints from "@/components/molecules/MoviePoints"
import { Box, Typography } from "@mui/material"

export const metadata = {
  title: "MoviePoints - PopcornPass",
  description: "Acumulando puntos podrás obtener canjes para disfrutar la máximo tu visita!",
}

const page = () => {
  return (
    <Box>
      <Typography px={3} variant="h3" component="h1" textAlign={{ xs: "center", md: "left" }}>
        MoviePoints
      </Typography>


      <MoviePoints/>
     
    </Box>
  )
}

export default page