import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Box } from '@mui/material';

//     card: {
//         backgroundColor: 'var(--lightBlack)',
//         color: 'var(--white)',
//         marginBottom: theme.spacing(2),
//         '&:hover': {
//             backgroundColor: 'var(--yellow)',
//             color: 'var(--black)',
//             transition: 'background-color 0.3s, color 0.3s',
//         },
//     },
//     media: {
//         height: 150,
//     },
//     content: {
//         paddingBottom: `${theme.spacing(2)}px !important`,
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },
//     button: {
//         marginTop: theme.spacing(2),
//         backgroundColor: 'var(--yellow)',
//         color: 'var(--black)',
//         '&:hover': {
//             backgroundColor: 'var(--black)',
//             color: 'var(--yellow)',
//         },
//     },
// }));
{/* <p>Acumulando puntos podrás obtener canjes para disfrutar la máximo tu visita!</p>
<p>Por cada $100 pesos gastados en nuestras salas, acumularás 1 punto.</p>
<p>Cada punto acumulado te dará derecho a un canje por:</p>

<ul>
  <li>1 entrada gratis</li>
  <li>1 combo de palomitas y bebida</li>
  <li>1 descuento en la compra de merchandising</li>

</ul> */}
const rewards = [
    {
        id: 1,
        name: "Entradas 2x1 de Cine 2D",
        description: "Canjea esta entrada para ver cualquier película en 2D.",
        points: 4400,
    },
    {
        id: 2,
        name: "Entradas 2x1 de Cine 3D",
        description: "Disfruta de una gran porción de palomitas y una bebida.",
        points: 4400,
    },
    {
        id: 3,
        name: "2x1 en Entradas los Miercóles",
        description: "Lleva a un amigo al cine con este 2x1 en entradas.",
        points: 3000,
    },
    {
        id: 4,
        name: "Combo PopCorn",
        description: "Obten un combo de pochoclos y gaseosa con este canje.",
        points: 2600,
    },
    {
        id: 5,
        name: "Promoción Golosinas",
        description: "Obten una selección de golosinas con este canje.",
        points: 3000,
    },
    {
        id: 6,
        name: "Entrada Gratis 2D",
        description: "Obten una entrada gratis 2D con este canje.",
        points: 4300,
    },
];

const MoviePoints = () => {

    return (
        <Box sx={{flexGrow:1, padding:2}}>
            <Grid container spacing={3}>
                {rewards.map((reward) => (
                    <Grid item xs={12} sm={6} md={4} key={reward.id}>
                        <Card className={"classes.card"} sx={{bgcolor:"var(--white)"}}>
                            <CardMedia
                                className={"classes.media"}
                                sx={{ height: 400 }}
                                image={`/images/moviepoints/${reward.id}.jfif`}
                                title={reward.name}
                            />
                            <CardContent className={"classes.content"} sx={{
                                height: "180px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                padding: "12px!important",

                            }}>
                                <Typography variant="h5" component="div"  noWrap={true}>
                                    {reward.name}
                                </Typography>
                                <Typography className={"classes.pos"} color="textSecondary">
                                    {reward.description}
                                </Typography>
                                <Typography variant="body2">
                                    Puntos necesarios: {reward.points}
                                </Typography>
                                <Button variant='contained' color="warning" className={"classes.button"}>
                                    Canjear
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MoviePoints;
