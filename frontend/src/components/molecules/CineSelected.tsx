"use client"
import { FC } from 'react'
import InputSelected from '../atoms/InputSelected'
import { Box } from '@mui/material'
import { useCinemaStore } from '@/store/cinema-store'


interface Props {
    registerCity?: any
    cities?: any
    cinemaList?: any
    registerCinema?: any
    localDisabled?: boolean
}

const CineSelected: FC<Props> = ({ localDisabled, registerCity, cities, cinemaList, registerCinema }) => {
    const { currentCinema, currentCity } = useCinemaStore()
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" gap="1rem"
            flexDirection={{ xs: "column", sm: "row" }}>

            {
                localDisabled ?
                    [
                        <InputSelected key={1} listTo="Ciudad elegida" localDisabled={localDisabled} currentValue={currentCity} />,
                        <InputSelected key={2} listTo="Cine elegidao" localDisabled={localDisabled} currentValue={currentCinema} />
                    ]
                    :
                    <>
                        <InputSelected
                            currentValue={currentCity}
                            localDisabled={localDisabled}

                            listTo={"Ciudades"}
                            valueAndName={cities}
                            register={registerCity}
                        />
                        {cinemaList && (
                            <InputSelected
                                currentValue={currentCinema}
                                localDisabled={localDisabled}

                                listTo={"Cines"}
                                optionsValue={cinemaList}
                                register={registerCinema}
                            />)}</>
            }


        </Box>
    )
}

export default CineSelected