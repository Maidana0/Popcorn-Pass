/* 
VA A FILTRARSE POR: "/movie/..."
TITULO (getByTitle)/ STRING
SI ESTA SUBTITULADA O NO (getBySubtitle)/ BOOLEAN
SI ESTA EN 3D O NO (getByThreeD) / BOOLEAN
POR FECHA (getByReleaseDate) / LOCALDATE
*/
import { useState } from 'react';
import { SxProps, Typography, Button, Modal, Box, useTheme, useMediaQuery, Container } from '@mui/material';

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
const styleButton: SxProps = {
    bgcolor: "var(--lightBlack)", borderColor: "transparent",
    width: "fit-content",
    color: "var(--gray-color)",
    marginLeft: "auto",
    "&:hover": {
        borderColor: "var(--gray-color)",
        bgcolor: "#000"
    }

}
const FilterModal = () => {
    const [open, setOpen] = useState(false);
    const theme = useTheme()
    const isMatch: boolean = useMediaQuery(theme.breakpoints.down("sm"))
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button sx={styleButton} color="inherit" variant="outlined" onClick={handleOpen}>
                {isMatch ? "Filtrar" : "Filtrar por categoría"}
            </Button>
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
                        <Button variant="contained" sx={{ marginRight: "1rem" }} onClick={handleClose}>
                            filtrar
                        </Button>
                        <Button variant="contained" color="error" onClick={handleClose}>
                            cerrar
                        </Button>
                    </Container>
                </Box>
            </Modal>
        </>
    );
}


export default FilterModal