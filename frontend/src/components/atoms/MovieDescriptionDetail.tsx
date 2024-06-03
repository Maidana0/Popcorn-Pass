import { IMovieDescription } from "@/common/interfaces"
import { Box, Typography } from "@mui/material"
import { FC } from "react"

const MovieDescriptionDetail: FC<IMovieDescription> = ({ description }) => {
    return (
        <Box padding="10px 20px">
            <Typography fontWeight={700} fontSize="24px" variant="subtitle1" lineHeight={"30px"} color="var(--light-white-color)" children="Descripción: " />

            <Typography component={"p"} variant="body2" marginTop="15px" fontWeight={700} fontSize="16px" lineHeight={"26px"} color="var(--light-gray-color)" children={description}/>
        </Box>
    )
}

export default MovieDescriptionDetail