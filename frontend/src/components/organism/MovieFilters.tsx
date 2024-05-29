"use client"
import { useForm } from "react-hook-form"
import { Container, SxProps, Box } from "@mui/material"
import FilterModal from "../atoms/FilterModal"
import InputSelected, { IOptionsValue } from "../atoms/InputSelected"
import { useEffect, useState } from "react"
import { fetchData } from "@/utils/fetchData"
import { useMoviesState } from "@/store/movies-store"


const styleContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap: "1rem",
  marginBottom: "2.5rem",
  flexWrap: "wrap",
}




const MovieFilters = () => {
  const [citiesList, setCitiesList] = useState<IOptionsValue[] | false>(false)
  const [cinemaList, setCinemaList] = useState<IOptionsValue[] | false>(false)
  const { setMovies } = useMoviesState(state => ({ setMovies: state.setMovies }))
  const { register, watch } = useForm()
  const { city, cinema } = watch()

  useEffect(() => {
    if (city == "empty" || cinema == "empty" || !cinema) return
    // CAMBIAR UN ESTADO GLOBAL EN EL QUE ESTARÁN LAS PELICULAS SEGÚN EL CINE SELECCIONADO
    console.log(cinema);
    // setMovies({ city, cinema })
  }, [cinema])


  useEffect(() => {
    const listFetch = async (): Promise<any> => {
      if (!city) {
        // const res = fetchData() PEDIR LISTA DE CIUDADES
        setCitiesList([{ value: "1", name: "Ciudad uno" }, { value: "2", name: "Ciudad dos" }])
        return
      }

      if (city !== "empty") {
        // const res = await fetchData() PEDIR LISTA DE CINES DEPENDIENDO DE LA CIUDAD SELECCIONADA
        setCinemaList([{ value: "1", name: "Cine uno" }, { value: "2", name: "Cine dos" }])
        return
      }
    }
    listFetch()
  }, [city])

  return (
    <Container sx={styleContainer}>
      <Box display="flex" justifyContent="space-between" gap="1rem">

        {citiesList && <InputSelected listTo={"Ciudades"}
          optionsValue={citiesList} register={{ ...register("city") }}
        />}

        {cinemaList && (
          <InputSelected listTo={"Cines"} optionsValue={cinemaList}
            register={{ ...register("cinema") }} />)}

      </Box>
      <FilterModal />
    </Container>
  )
}

export default MovieFilters