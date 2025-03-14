"use client"
import { Container, SxProps } from "@mui/material"
import FilterModal from "../atoms/FilterModal"
import { useEffect } from "react"
import { fetchData } from "@/utils/fetchData"
import { useCinemaStore } from "@/store/cinema-store"
import SelectCine from "../molecules/SelectCine"


const styleContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap: "1rem",
  marginBottom: "2.5rem",
  flexWrap: "wrap",
}

const getMoviesByCinema = async (cinemaId: string) => {
  if (process.env.MODE != "only-front") {
    const movies = await fetchData(`cinema/moviesByCine/${cinemaId}`)
    if (movies.error) {
      throw new Error(`No se puede obtener las películas del cine (con id ${cinemaId}). ${movies.error}`)
    }
    return movies
  }
  throw new Error(`No se puede obtener las películas del cine (con id ${cinemaId}). No se encuentra conectado al backend.`)
}

const MovieFilters = ({ cities }: { cities: string[] }) => {
  const { currentCinema, setMoviesByCinema } = useCinemaStore(state => ({
    currentCinema: state.currentCinema,
    setMoviesByCinema: state.setMoviesByCinema
  }))

  useEffect(() => {
    if (!currentCinema) return
    getMoviesByCinema(currentCinema.id)
      .then(data => {
        console.log(data);

        data.lenght > 0
          ? setMoviesByCinema(data)
          : setMoviesByCinema(false)
      })
      .catch(err => console.log(err.message))
  }, [currentCinema])

  return (
    <Container sx={styleContainer}>
      <SelectCine cities={cities} />

      <FilterModal />
    </Container>
  )
}

export default MovieFilters