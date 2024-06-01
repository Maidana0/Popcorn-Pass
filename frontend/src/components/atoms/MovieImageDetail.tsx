import { IMovieImage } from "@/common/interfaces"
import { convertImagePath } from "@/utils/fc-movies"
import { Box } from "@mui/material"
import { FC } from "react"

const MovieImagenDetail: FC<IMovieImage> =
    ({ description, imagePath }) => {
        const imageSrc = (description && imagePath) ? convertImagePath(description, imagePath) : false
        return (
            <Box
                src={imageSrc || "/images/deadpool-3.jpg"}
                component="img"
                loading="lazy"
                alt="Poster-Image"
                height={{ xs: 250, sm: "auto", md: 363 }}
                width={{ xs: "100%",sm:"43%", md: 290 }}
                sx={{
                    position: "relative", overflow: "hidden",
                    borderRadius: { sm: "16px 0 0 16px" },
                    objectFit: "cover",
                }}
            />)
    }

export default MovieImagenDetail