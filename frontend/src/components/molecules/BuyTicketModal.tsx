import { FC } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: "95%", sm: 400 },
    bgcolor: 'var(--light-white-color)',
    color: "#000",
    border: '2px solid var(--light-gray-color)',
    borderRadius:3,
    boxShadow: 24,
    px: 2,
    py: 3
};

export interface InfoItem {
    value: string,
    name: string
}

interface Props {
    open: boolean
    setOpen: (state: boolean) => void
    info: InfoItem[]
}

const BuyTicketModal: FC<Props> = ({ open, setOpen, info }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        {
                            info.map(item => (
                                <Box key={item.name} display="flex" width={"100%"} overflow={"hidden"} alignItems={"center"} justifyContent={"space-between"}>
                                    <Typography textTransform={"capitalize"} color={"var(--gray-color"} maxWidth={"45%"} textAlign={"left"} >
                                        {item.name}:
                                    </Typography>
                                    <Typography textTransform={"capitalize"} noWrap color={"var(--gray-color"} maxWidth={"45%"} textAlign={"right"} >
                                        {item.value}
                                    </Typography>
                                </Box>
                            ))
                        }

                        <hr />

                        <Box width={"95%"} margin="1rem auto 0">
                            <Typography variant={"h5"} textAlign={"center"} sx={{ mb: 2 }}>
                                Elige tu medio de Pago
                            </Typography>

                            <Box display="flex" justifyContent={"space-between"} mb={1.5}>
                                <Button variant="contained" sx={{ fontWeight: 600, minHeight: "2.6rem", width: "48%" }} color="info">
                                    mercado pago
                                </Button>
                                <Button variant="contained" sx={{ fontWeight: 600, minHeight: "2.6rem", width: "48%" }} color="warning">
                                    move points
                                </Button>
                            </Box>
                        <Button variant="contained" sx={{ marginTop: 2.5 }} fullWidth color="error" onClick={handleClose}>
                            cancelar
                        </Button>
                        </Box>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}


export default BuyTicketModal