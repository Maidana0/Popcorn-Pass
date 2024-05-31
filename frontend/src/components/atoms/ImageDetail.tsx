import { Box } from "@mui/material"

const ImageDetail = () => {
    return (
        <Box height={{ xs: 250, sm: 363 }} width={{ xs: "100%", sm: 290 }} sx={{
            position: "relative", overflow: "hidden", 
            borderRadius: {sm:"16px 0 0 16px"}
        }}>
            <Box
                component="img"
                loading="lazy"
                src={"/images/deadpool-3.jpg"}
                alt="Banner Image"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
        </Box>)
}

export default ImageDetail