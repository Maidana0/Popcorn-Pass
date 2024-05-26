"use client"

/* 
VA A FILTRARSE POR: "/movie/..."
TITULO (getByTitle)/ STRING
SI ESTA SUBTITULADA O NO (getBySubtitle)/ BOOLEAN
SI ESTA EN 3D O NO (getByThreeD) / BOOLEAN
POR FECHA (getByReleaseDate) / LOCALDATE
*/
import { useState } from 'react';
import { SxProps, Typography, Button, Modal, Box } from '@mui/material';
import { Container } from '@mui/system';

const style: SxProps = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: "none",
    bgcolor: 'var(--black)',
    borderRadius: "8px",
    p: 4,
};
const styleBoxButton: SxProps = {
    textAlign: "end", padding: "0 2rem 2rem", "& button": {
        bgcolor: "var(--lightBlack)", borderColor: "transparent",
        color: "var(--gray-color)",
        "&:hover": {
            borderColor: "var(--gray-color)",
            bgcolor: "#000"
        }
    }
}
export default function KeepMountedModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box sx={styleBoxButton}>
                <Button color="inherit" variant="outlined" onClick={handleOpen}>Filtrar por categoría</Button>
            </Box>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                        Aplicar Filtros
                    </Typography>
                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>

                    <Container sx={{ marginTop: "1.5rem", textAlign: "center", }}>
                        <Button children="filtrar" variant="contained" sx={{ marginRight: "1rem" }} onClick={handleClose} />
                        <Button children="cerrar" variant="contained" color="error" onClick={handleClose} />
                    </Container>
                </Box>
            </Modal>
        </>
    );
}
