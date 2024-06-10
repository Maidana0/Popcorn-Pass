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

const moviesByCinema = async (cinemaId: string) => {
  // const moviesList = await fetchData(`cinema/moviesByCine/${cinemaId}`)
  console.log("ID DEL CINE: " + cinemaId);
  console.log("LISTA DE PELICULAS: ");
  // console.log(moviesList);
}

const MovieFilters = ({ cities }: { cities: string[] }) => {
  const { currentCinema } = useCinemaStore(state => ({
    currentCinema: state.currentCinema
  }))
  useEffect(() => {
    if (currentCinema == "empty" || !currentCinema) return
    // CAMBIAR UN ESTADO GLOBAL EN EL QUE ESTARÁN LAS PELICULAS SEGÚN EL CINE SELECCIONADO
    moviesByCinema(currentCinema)
  }, [currentCinema])

  return (
    <Container sx={styleContainer}>
      <SelectCine cities={cities} />

      <FilterModal />
    </Container>
  )
}

export default MovieFilters