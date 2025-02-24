"use client"
import { useEffect, useState } from 'react'
import InputSelected from '../atoms/InputSelected'
import { Box } from '@mui/material'
import { ICinema, useCinemaStore } from '@/store/cinema-store'
import { useForm } from 'react-hook-form'
import { getCinemaListByCity } from '@/data/getCinemas'

const SelectCine = ({ cities }: { cities: string[] }) => {
    const { currentCity, setCurrentCity, currentCinema, setCurrentCinema } = useCinemaStore(state => ({
        setCurrentCity: state.setCurrentCity,
        setCurrentCinema: state.setCurrentCinema,
        currentCity: state.currentCity,
        currentCinema: state.currentCinema
    }))


    const [cinemaList, setCinemaList] = useState<ICinema[] | false>(false)
    const { register, watch } = useForm()
    const { city, cinema } = watch()



    useEffect(() => {
        if (city == "empty" || !cinema || !city) return

        if (cinema != "empty") {
            const objCinema = cinemaList && cinemaList.find(({ id }) => id == cinema)
            objCinema && setCurrentCinema(objCinema)
        }
    }, [cinema])



    useEffect(() => {
        // setCinemaList(false)

        if (city == "empty" && currentCity == "empty") return
        if (city && city != "empty") {
            setCurrentCity(city)
            setCurrentCinema(false)
        }
        getCinemaListByCity(currentCity, city, setCinemaList)
    }, [city])



    return (
        <Box display="flex" alignItems="center" gap="1rem"
            flexDirection={{ xs: "column", sm: "row" }}>

            <InputSelected
                currentValue={currentCity}
                listTo={"Ciudades"}
                valueAndName={cities}
                register={{ ...register("city") }}
            />
            {cinemaList && (
                <InputSelected
                    currentValue={currentCinema ? currentCinema.id : "empty"}
                    listTo={"Cines"}
                    optionsValue={cinemaList}
                    register={{ ...register("cinema") }}
                />)}

        </Box>
    )
}

export default SelectCine