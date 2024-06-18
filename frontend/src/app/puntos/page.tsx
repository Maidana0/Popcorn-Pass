import { Box, Typography } from "@mui/material"

export const metadata = {
  title: "MoviePoints - PopcornPass",
  description: "Acumulando puntos podrás obtener canjes para disfrutar la máximo tu visita!",
}

const page = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" textAlign={{ xs: "center", md: "left" }}>
        MoviePoints
      </Typography>
      <p>Acumulando puntos podrás obtener canjes para disfrutar la máximo tu visita!</p>
      <p>Por cada $100 pesos gastados en nuestras salas, acumularás 1 punto.</p>
      <p>Cada punto acumulado te dará derecho a un canje por:</p>

      <ul>
        <li>1 entrada gratis</li>
        <li>1 combo de palomitas y bebida</li>
        <li>1 descuento en la compra de merchandising</li>

      </ul>
    </Box>
  )
}

export default page