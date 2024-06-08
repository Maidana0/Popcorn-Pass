"use client"
import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{ backgroundColor: "#000", padding: "1rem 0", textAlign: "center", color: "#fff" }}
        >

            <Typography color="inherit" variant="h6">
                Footer
            </Typography>

            <Container sx={{ marginTop: "5px" }}>
                <Typography color="inherit" variant="subtitle2">
                    NextApp 2024

                    {/* <p style={paragraphStyle}>
                        Si tienes alguna pregunta o deseas saber más sobre nuestros
                        servicios, no dudes en contactarnos en contacto@ticketera.com.
                    </p> */}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;