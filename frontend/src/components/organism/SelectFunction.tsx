"use client"
import IFunctionDetail from '@/common/interface-functionDetail'
import { Button, Container, Typography, Grow, Grid, Box } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import GridOption from '../atoms/GridOption'
import { UseMoviefunction } from '@/store/movie-function-store'
import { shallow } from 'zustand/shallow'
import { useRouter, usePathname } from 'next/navigation'


const SelectRom: FC<{ listFunctionDetail: IFunctionDetail[] }> = ({ listFunctionDetail }) => {
    const router = useRouter()
    const currentPath = usePathname()
    const [isSelectingRoom, setIsSelectingRoom] = useState(false)
    const [groupedByDay, setGroupedByDay] = useState<Record<string, IFunctionDetail[]>>({})
    const { setMovieFunctionDetail } = UseMoviefunction(state => ({
        setMovieFunctionDetail: state.setMovieFunctionDetail
    }), shallow)

    const handleSelectState = () => setIsSelectingRoom(!isSelectingRoom)
    const handleClickOnFunction = (functionDetail: IFunctionDetail) => {
        setMovieFunctionDetail(functionDetail);
        router.push(currentPath + "/comprar")
    }


    useEffect(() => {
        const grouped: Record<string, IFunctionDetail[]> = {};
        listFunctionDetail.forEach((data) => {
            const functionDate = new Date(data.schedule);
            const functionDay = functionDate.toLocaleDateString("es-ES", { weekday: 'long', day: 'numeric', month: 'long' });
            if (!grouped[functionDay]) {
                grouped[functionDay] = [];
            }
            grouped[functionDay].push(data);
        });
        setGroupedByDay(grouped);
    }, [listFunctionDetail]);

    return <Container sx={{ mt: 2, mb: 5, textAlign: "center" }}>

        <Box sx={{ display: isSelectingRoom ? "flex" : "none", flexDirection: "column" }}>

            <Grow in={isSelectingRoom}>
                <Typography variant="h4" component="h1" p={3}>
                    Horarios
                </Typography>
            </Grow>

            <Grow in={isSelectingRoom} style={{ transformOrigin: '0 0 0' }}  {...(isSelectingRoom ? { timeout: 1000 } : {})}  >
                <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: { sm: "center", md: "space-between" } }}>
                    {Object.entries(groupedByDay).map(([day, data]) =>
                        <Box key={day}
                            flexDirection="column"
                            borderRadius={3}
                            p={2} width={{ xs: "98%", sm: "80%", md: "48%" }}
                            bgcolor={"var(--lightBlack)"}
                            mb={3}>
                            <Typography
                                variant={"h5"}
                                color={"var(--gray-color)"}
                                textTransform={"capitalize"}
                                component="h2" p={3} fontWeight={600}>
                                {day}
                            </Typography>
                            <Grid container rowSpacing={2} columnSpacing={2} mb={3}
                                justifyContent={"center"} alignItems={"center"}
                            >
                                {data.map((functionDetail) => {
                                    const functionTime: string = new Date(functionDetail.schedule).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });
                                    return (
                                        <GridOption key={`${functionDetail.screenId}-${functionDetail.movieId}`}
                                            state={isSelectingRoom}
                                            handleClick={() => handleClickOnFunction(functionDetail)}
                                        >
                                            {functionTime}
                                        </GridOption>
                                    )
                                })}
                            </Grid>
                        </Box>)}
                </Box>
            </Grow>

        </Box>

        <Button variant="contained" color={isSelectingRoom ? "error" : "warning"}
            size="large" type="button" onClick={handleSelectState}>
            {isSelectingRoom ? "Cancelar" : "Comprar Entrada"}
        </Button>
    </Container>
}

export default SelectRom