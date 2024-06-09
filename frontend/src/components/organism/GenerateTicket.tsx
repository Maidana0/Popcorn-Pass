"use client"
import { Box, Button } from '@mui/material'

const GenerateTicket = () => {
    return (
        <>
            <Box>
                - Cine
                - Día
                - Hora
                - Sala
                - Butacas
            </Box>
            <Box>
                <Button variant="contained" fullWidth sx={{ mb: 1.5, fontWeight: 600, color: "var(--light-white-color)" }}>comprar</Button>
                <Button variant="contained" fullWidth color="error" sx={{ fontWeight: 600, color: "var(--light-white-color)" }}>cancelar</Button>
            </Box>

        </>
    )
}

export default GenerateTicket