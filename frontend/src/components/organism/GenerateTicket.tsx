"use client"
import { IMovie } from '@/common/interface-movie'
import { useCinemaStore } from '@/store/cinema-store'
import { UseMoviefunction } from '@/store/movie-function-store'
import { Box, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { shallow } from 'zustand/shallow'

/*
/mp/create

{
  "userId": "string",
  "movieName": "string",
  "functionDetailsId": "string",
  "seatsIds": [
    "string"
  ],
  "amountOfSeats": 0,
  "unitPrice": 0
}
*/
const GenerateTicket = ({ movie }: { movie: IMovie }) => {
    const [info, setInfo] = useState([])

    const { movieFunctionDetail, selectedSeats, currentMovie, setCurrentMovie } = UseMoviefunction(state => ({
        movieFunctionDetail: state.movieFunctionDetail,
        selectedSeats: state.selectedSeats,
        currentMovie: state.currentMovie,
        setCurrentMovie: state.setCurrentMovie
    }), shallow)

    const { currentCity, currentCinema } = useCinemaStore(state => ({
        currentCity: state.currentCity,
        currentCinema: state.currentCinema
    }))

    useEffect(() => {
        if (movieFunctionDetail) {
            const { screenId, schedule } = movieFunctionDetail
            const date = new Date(schedule)
            const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`

            setInfo([
                { name: "ciudad", value: currentCity },
                { name: "cine", value: currentCinema },
                { name: "pelicula", value: movie.title },
                { name: "sala", value: screenId },
                { name: "día", value: formattedDate },
                { name: "hora", value: date.getHours() },
                { name: "butacas", value: (selectedSeats.map(seat => seat).join(", ") + ".") },
            ])
        }

    }, [selectedSeats])

    useEffect(() => {
        setCurrentMovie(movie)
    }, [])


    return (
        <>
            <Box>
                - Cine
                - Día
                - Hora
                - Sala
                - Butacas
            </Box>
            <Box>
                <Button variant="contained" fullWidth sx={{ mb: 1.5, fontWeight: 600, color: "var(--light-white-color)" }}>comprar</Button>
                <Button variant="contained" fullWidth color="error" sx={{ fontWeight: 600, color: "var(--light-white-color)" }}>cancelar</Button>
            </Box>

        </>
    )
}

export default GenerateTicket