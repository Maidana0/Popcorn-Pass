import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, Grid, CardMedia, colors } from '@mui/material';

interface Cinemas {
    ID: number,
    NOMBRE: string,
    CIUDAD: string,
    DIRECCION: string,
    PROVINCIA: string,
    DESCRIPCION: string,
}

interface Props {
    cinemas: Cinemas[];
}


const CinemaList: FC<Props> = ({ cinemas }) => {
    return (
        <Box flexGrow={1} padding={2}>
            <Grid container spacing={3}>
                {cinemas.map((cine) => (
                    <Grid item xs={12} sm={6} md={4} key={`${cine.ID}-${cine.NOMBRE}`}>
                        <Card sx={{
                            backgroundColor: 'var(--lightBlack)',
                            color: 'var(--white)',
                            marginBottom: 2,
                            "& span": {
                                color: "var(--light-gray-color)",
                            },
                            '&:hover': {
                                backgroundColor: 'var(--yellow)',
                                color: 'var(--black)',
                                transition: 'background-color 0.4s, color 0.3s',
                                "& h5": {
                                    color: "var(--black)",
                                },
                                "& span": {
                                    color: "var(--lightBlack)",
                                }
                            },
                        }}>
                            <CardMedia
                                image={`/images/cinemas/${cine.ID}.jpg`}
                                sx={{ height: 150 }}
                                title={cine.NOMBRE}
                            />
                            <CardContent sx={{
                                height: "165px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "12px!important",
                            }}>
                                <Typography variant="h5" title={cine.NOMBRE} component="h5" noWrap={true}
                                    color={'var(--yellow)'}>
                                    {cine.NOMBRE}
                                </Typography>

                                <Typography mb={1} variant={"caption"} component={"span"}>
                                    {cine.CIUDAD}, {cine.PROVINCIA}
                                </Typography>

                                <Typography variant="body2" component="p">
                                    {cine.DESCRIPCION}
                                </Typography>

                                <Box textAlign={"end"} my={0} width={"100%"}>
                                    <Typography variant="caption" textAlign={"center"} component={"span"}>
                                        {cine.DIRECCION}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
};

export default CinemaList;
