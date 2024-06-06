"use client"
import { useForm } from "react-hook-form"
import { Container, SxProps, Box } from "@mui/material"
import FilterModal from "../atoms/FilterModal"
import InputSelected, { IOptionsValue } from "../atoms/InputSelected"
import { useEffect, useState } from "react"
import { fetchData } from "@/utils/fetchData"
import { useCinemaStore } from "@/store/cinema-store"
import CineSelected from "../molecules/CineSelected"


const styleContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap: "1rem",
  marginBottom: "2.5rem",
  flexWrap: "wrap",
}


const MovieFilters = ({ cities }: { cities: string[] }) => {
  const { currentCity, setCurrentCity, setCurrentCinema } = useCinemaStore(state => ({
    setCurrentCity: state.setCurrentCity,
    setCurrentCinema: state.setCurrentCinema,
    currentCity: state.currentCity
  }))
  const [cinemaList, setCinemaList] = useState<IOptionsValue[] | false>(false)
  const { register, watch } = useForm()
  const { city, cinema } = watch()

  useEffect(() => {
    if (city == "empty" || cinema == "empty" || !city || !cinema) return
    // CAMBIAR UN ESTADO GLOBAL EN EL QUE ESTARÁN LAS PELICULAS SEGÚN EL CINE SELECCIONADO
    setCurrentCity(city)
    setCurrentCinema(cinema)
    const moviesByCinema = async () => {
      const moviesList = await fetchData(`cinema/moviesByCine/${cinema}`)
      console.log("ID DEL CINE: " + cinema);
      console.log("LISTA DE PELICULAS: ");
      console.log(moviesList);
    }
    moviesByCinema()
  }, [cinema])

  useEffect(() => {
    setCinemaList(false)

    if (city == "empty" && currentCity == "empty") return

    //  PEDIR LISTA DE CINES DEPENDIENDO DE LA CIUDAD SELECCIONADA
    const listFetch = async (): Promise<any> => {
      if (currentCity && !city) {
        //  PEDIR LISTA DE CINES DEPENDIENDO DE LA CIUDAD SELECCIONADA
        const res = await fetchData(`cinema/cinemasByCity/${currentCity}`)
        const dtoMovies = res.map(({ id, name }: { id: string, name: string }) => ({ value: id, name }))
        setCinemaList(dtoMovies)
        return
      }

      if (city !== "empty") {
        //  PEDIR LISTA DE CINES DEPENDIENDO DE LA CIUDAD SELECCIONADA
        const res = await fetchData(`cinema/cinemasByCity/${city}`)
        const dtoMovies = res.map(({ id, name }: { id: string, name: string }) => ({ value: id, name }))
        setCinemaList(dtoMovies)
        return
      }
    }
    listFetch()
  }, [city])

  return (
    <Container sx={styleContainer}>
      <CineSelected
        registerCity={{ ...register("city") }}
        cities={cities}
        cinemaList={cinemaList}
        registerCinema={{ ...register("cinema") }}
      />
      <FilterModal />
    </Container>
  )
}

export default MovieFilters