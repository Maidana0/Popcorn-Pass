import { Box, Typography } from "@mui/material"



export const metadata = {
  title: "Promociones - PopcornPass",
  description: "Encuentra el cupón de descuento ideal para ti. ¡Aprovecha las ofertas y ahorra en tus compras en línea!",
}

const page = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" textAlign={{ xs: "center", md: "left" }}>
        Promociones
      </Typography>
    </Box>
  )
}

export default page