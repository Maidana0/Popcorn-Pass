"use client"
import { useEffect, useState } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import AmountSeats from "../molecules/AmountSeats";
import { UseMoviefunction } from "@/store/movie-function-store";
import Image from "next/image";
import { sortSeats } from "@/utils/utils";
import { ISeat } from "@/common/interface-functionDetail";
import { shallow } from "zustand/shallow";

const infoSeats = [
    { src: "seat-white", name: "disponible" },
    { src: "seat-red", name: "ocupado" },
    { src: "seat-yellow", name: "seleccionado" },
]

const Seats = () => {
    const [numberSeats, setNumberSeats] = useState(1)
    const [totalseats, setTotalSeats] = useState<ISeat[]>([])

    const { movieFunctionDetail, currentMovie } = UseMoviefunction(state => ({ movieFunctionDetail: state.movieFunctionDetail, currentMovie: state.currentMovie }), shallow)
    console.log(movieFunctionDetail);

    useEffect(() => {
        if (movieFunctionDetail) {
            const sortedSeats = sortSeats(movieFunctionDetail.seatsList);
            setTotalSeats(sortedSeats)
        }
    }, [movieFunctionDetail])

    const getSeatImage = (seat: ISeat) => {
        switch (seat.seatEnum) {
            case "OCCUPIED":
                return "seat-red";
            case "SELECTED":
                return "seat-yellow";
            default:
                return "seat-white";
        }
    }

    return (
        <Box>
            <AmountSeats
                numberSeats={numberSeats}
                setNumberSeats={setNumberSeats}
            />

            <Box display="flex" gap={2} p={1} my={1}
                flexWrap={"wrap"}
                justifyContent="space-between"
            >
                {infoSeats.map(({ src, name }) => (
                    <Box key={name} display="flex" alignItems={"center"} gap={1.5}>
                        <Typography
                            width={{ xs: "104px", sm: "fit-content" }}
                            // 
                            textTransform={"uppercase"}
                            fontSize={12}
                            fontWeight={"bold"}
                            color={"var(--light-gray-color)"}
                        >
                            {name}:
                        </Typography>
                        <Image
                            width={24}
                            height={24}
                            src={`/images/seats/${src}.png`}
                            alt={name}
                        />
                    </Box>
                ))}
            </Box>

            {movieFunctionDetail &&
                <Grid container
                    width={{ xs: "97%", sm: "80%", md: "65%", lg: "50%" }}
                    spacing={0}
                    columns={7}
                    mt={4} mb={5}
                    mx={"auto"}
                    alignItems={"center"}>
                    <Grid item xs={7} alignContent={"center"} mb={4}>
                        <Box sx={{
                            margin: "auto",
                            width: "100%",
                            height: "4px",
                            borderRadius: "50%",
                            bgcolor: "var(--light-white-color)"
                        }}
                        />
                        <Typography color="var(--light-white-color)" variant={"h6"} component={"div"} textAlign={"center"} fontWeight={"bold"}>
                            PANTALLA
                        </Typography>
                    </Grid>
                    {totalseats.map(data => {

                        return (
                            <Grid item xs={1} key={data.seatNumber} display="flex" flexDirection={"column"}
                                alignItems={"center"} mt={1} justifyContent={"center"} sx={{ padding: "0!important" }}>
                                <Image
                                    style={{ cursor: "pointer" }}
                                    width={24}
                                    height={24}
                                    src={`/images/seats/${getSeatImage(data)}.png`}
                                    alt={data.seatNumber}
                                />
                                <Typography color="var(--light-gray-color)" variant={"caption"} component={"div"} textAlign={"center"} title={"Butaca " + data.seatNumber}>
                                    {data.seatNumber}
                                </Typography>
                            </Grid>

                        )
                    })}

                </Grid>
            }




        </Box>
    )
}

export default Seats