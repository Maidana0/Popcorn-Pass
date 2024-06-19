import { Box, Typography } from "@mui/material"
import Image from "next/image"

const CarouselPay = ({ images }: { images: string[] }) => {
    return (
        <Box display="flex" flexWrap={"wrap"} gap={"2rem 0"} justifyContent="space-evenly" width="100%" height="100%" >
            {images.map((image, index) => (
                <Box key={`${index}-${image}`} width={228}
                    height={"auto"} textAlign={"center"}
                    sx={{
                        "& > img": { transition: "all 0.3s ease-in-out" },
                        "& > img:hover": {
                            boxShadow: "0px 0px 10px #bf0101",
                            transform: "scale(1.01)",
                        },
                        "& > img:active": {
                            transform: "scale(0.95)",
                        },

                    }}>
                    <Image
                        width={228}
                        height={121.73}
                        src={image}
                        alt={`image-pay-${image}`}
                        objectFit="fill"
                        sizes="auto"
                        style={{
                            border: "solid 1px #f2f2f294",
                            borderRadius: "12px"
                        }}
                    />
                    <Typography component={"span"} variant="caption" textAlign={"center"}
                        color={"var(--light-gray-color)"} sx={{ cursor: "pointer" }} >

                        Términos y Condiciones</Typography>
                </Box>
            ))}

        </Box>
    )
}

export default CarouselPay