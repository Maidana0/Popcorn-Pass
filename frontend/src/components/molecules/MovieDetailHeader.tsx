"use client"
import { IMovieHeaderDetail } from '@/common/interfaces'
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material'
import Image from 'next/image'
import CalificationStar from '../atoms/CalificationStar'

// width={{ xs: "100%",sm:"43%", md: 290 }}


const HeaderDetail = ({ title, runtime, releaseDate, vote_average, vote_count }: IMovieHeaderDetail) => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box width={"100%"} display="flex" padding="20px 20px 10px" gap="20px"
      justifyContent={{ md: "space-between" }} flexDirection={{ xs: "column", md: "row" }}
      bgcolor={{ xs: "var(--lightBlack)", sm: "transparent" }} borderRadius={{ xs: "0 0 16px 16px", sm: "0" }} >

      <Box overflow={"hidden"}>
        <Typography title={title} variant="body1" lineHeight={"30px"} fontSize={26} fontWeight={700}
          children={title} color={"var(--light-white-color)"} noWrap={isMatch} />
        <Typography variant="body2" marginTop={1} lineHeight={"21px"} fontSize={16} fontWeight={400}
          color={"var(--light-gray-color)"}>
          {runtime} ● {releaseDate}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" gap="12px">

        <Box display={"flex"} alignItems={"center"} gap="5px">
          <Typography variant="caption" component={"legend"} fontSize={16} lineHeight={"20px"}
            fontWeight={700} color={"var(--white)"} children="Calificación" />

          <Image width={16} height={16} alt="star-icon" src={"/images/cards/star.svg"} />

          <Typography variant="caption" component={"div"} fontSize={16} lineHeight={"20px"}
            fontWeight={700} color={"var(--white)"} children={vote_average} />

          <Typography variant="caption" component={"span"} fontSize={12} fontWeight={400} lineHeight={"18px"}
            color={"var(--gray-color)"} children={`(${vote_count})`} />
        </Box>

        <Box display="flex" alignItems="center" justifyContent="space-between">
          <CalificationStar vote_average={vote_average} />
          <Button type="button" variant="outlined" color="warning">
            <Image
              src={"/images/polygon.svg"}
              alt="play-icon"
              width={16}
              height={16}
              style={{ marginRight: "5px" }}
            />
            <Typography component="span" variant="body2" sx={{ display: { xs: "block", sm: "none", md: "block" } }} children="trailer" />
          </Button>
        </Box>

      </Box>
    </Box>
  )
}

export default HeaderDetail  