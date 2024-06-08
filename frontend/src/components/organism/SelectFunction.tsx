"use client"
import IFunctionDetail from '@/common/interface-functionDetail'
// import { useCinemaStore } from '@/store/cinema-store'
// import { fetchData } from '@/utils/fetchData'
import { Button, Container, Typography, Grow, Grid, Box } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import GridOption from '../atoms/GridOption'

// HORA = {functionDate.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}


const SelectRom: FC<{ functionDetail: IFunctionDetail[] }> = ({ functionDetail }) => {
    // const { currentCinema } = useCinemaStore(state => ({ currentCinema: state.currentCinema }))
    const [isSelectingRoom, setIsSelectingRoom] = useState(false)
    const [listDay, setListDay] = useState<string[]>([])
    // movieId: "0651d3e4-fd14-41b9-8e29-28517a052934"
    // schedule: "2024-06-10T21:00:00"
    // screenId: "1"

    useEffect(() => {
        const days = new Set<string>();
        functionDetail.forEach((data) => {
            const functionDate = new Date(data.schedule);
            const functionDay = functionDate.toLocaleDateString("es-ES", { weekday: "long" });
            days.add(functionDay);
        });
        setListDay(Array.from(days));
    }, [])


    return (
        <Container sx={{ mt: 2, mb: 5, textAlign: "center" }}>
            <Grow in={isSelectingRoom}>
                <Typography variant="h4" component="h1" p={3}>
                    Horarios
                </Typography>
            </Grow>

            <Grow in={isSelectingRoom} style={{ transformOrigin: '0 0 0' }}  {...(isSelectingRoom ? { timeout: 1000 } : {})}  >
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { sm: "center", md: "space-between" } }}>
                    {listDay.map(day =>
                        <Box key={day}
                            flexDirection="column"
                            borderRadius={3}
                            p={2} width={{ xs: "98%", sm: "80%", md: "48%" }}
                            bgcolor={"var(--lightBlack)"}
                            mb={3}>
                            <Typography
                                variant="h4"
                                color={"var(--light-gray-color)"}
                                textTransform={"uppercase"}
                                component="h2" p={2} fontWeight={600}>
                                {day}
                            </Typography>
                            <Grid container rowSpacing={2} columnSpacing={2} mb={3}
                                justifyContent={"center"} alignItems={"center"}
                            >
                                {
                                    listDay.map((daye) =>
                                        <GridOption key={daye} state={isSelectingRoom}>
                                            {daye}
                                        </GridOption>
                                    )
                                }
                            </Grid>
                        </Box>)}
                </Box>
            </Grow>


            <Button variant="contained" color={isSelectingRoom ? "error" : "warning"}
                size="large" type="button" onClick={
                    () => setIsSelectingRoom(!isSelectingRoom)
                }>
                {isSelectingRoom ? "Cancelar" : "Comprar Entrada"}
            </Button>


        </Container >
    )
}





export default SelectRom