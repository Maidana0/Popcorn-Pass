import { IHeaderMovieDetail } from '@/common/interfaces'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import CalificationStar from '../atoms/CalificationStar'



const HeaderDetail = ({ title, runtime, releaseDate, vote_average, vote_count }: IHeaderMovieDetail) => {
  return (
    <Box width={"100%"} display="flex" padding="20px" gap="30px"
      justifyContent={{ md: "space-evenly" }} flexDirection={{ xs: "column", md: "row" }}
      bgcolor={{ xs: "var(--lightBlack)",sm:"transparent" }} borderRadius={{ xs: "0 0 16px 16px", sm:"0" }} >

      <Box>
        <Typography variant="body1" lineHeight={"30px"} fontSize={26} fontWeight={700}
          children={title} color={"var(--white)"} />
        <Typography variant="body2" marginTop={1} lineHeight={"21px"} fontSize={16} fontWeight={400}
          color={"var(--gray-color)"}>
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
            trailer
          </Button>
        </Box>

      </Box>
    </Box>
  )
}

export default HeaderDetail  