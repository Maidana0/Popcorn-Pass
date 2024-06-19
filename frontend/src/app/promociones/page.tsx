import CarouselPay from "@/components/molecules/CarouselPay"
import { Box, Typography } from "@mui/material"



export const metadata = {
  title: "Promociones - PopcornPass",
  description: "Encuentra el cupón de descuento ideal para ti. ¡Aprovecha las ofertas y ahorra en tus compras en línea!",
}


const imagesForPay: string[] = []
for (let i = 1; i <= 8; i++) {
  imagesForPay.push(`/images/promotions/pay/${i}.png`)
}

const imagesForCinemas: string[] = []
for (let i = 1; i <= 8; i++) {
  imagesForCinemas.push(`/images/promotions/cines/${i}.png`)
}


const page = () => {
  return (
    <Box marginTop={"-2rem"} width={"100%"}>
      <Box width={"100%"} height={{ xs: 200, sm: 300, md: 400 }} sx={{
        backgroundImage: "url('/images/promotions/portada.jfif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 70%",
        alignContent: "start"
      }}>
        <Typography variant="h3" component="h1" py={3} px={{ xs: 3, sm: 4, md: 5 }} textAlign={"center"}
          margin="auto" width={"fit-content"}
          bgcolor={"#1c1c1cc8"} mt={6} color={"var(--light-white-color)"} borderRadius={5}>
          Promociones
        </Typography>
      </Box>

      <Box my={3.5} py={3} px={1}>
        <Typography mb={2} variant={"h3"} textAlign={"center"} color={"var(--white)"} component={"h2"}>¿Qué esperas para visitar tu cine favorito?</Typography>
        <Typography variant={"h6"} textAlign={"center"} color={"var(--light-gray-color)"} component={"h3"}>Encuentra la promoción ideal para ti.</Typography>
        </Box>

      <Box mb={"5.5rem"}>
        <Typography variant="h4" mb={5} sx={{ bgcolor: "#bf0101d1" }} component="h2" py={3} px={{ xs: 3, sm: 4, md: 5 }} textAlign={"left"}>
          Pagos con Tarjetas
        </Typography>

        <Box>
          <CarouselPay images={imagesForPay} />
        </Box>
      </Box>

      <Box mt={"5.5rem"}>
        <Typography variant="h4" mb={5} sx={{ bgcolor: "#bf0101d1" }} component="h2" py={3} px={{ xs: 3, sm: 4, md: 5 }} textAlign={"left"}>
          Exlusivas de cines
        </Typography>

        <Box>
          <CarouselPay images={imagesForCinemas} />
        </Box>
      </Box>


      <Box width={"100%"} height={{ xs: 200, sm: 250, md: 350 }} sx={{
        backgroundImage: "url('/images/promotions/portada-2.jfif')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50% 12%",
        alignContent: "start",
        marginTop:"4rem",
        marginBottom:"-4rem",
        filter: "brightness(0.6)"
      }}>
      </Box>
    </Box>
  )
}

export default page