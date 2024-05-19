"use client"

import { AppBar, Toolbar, Typography, Box } from "@mui/material"
import Link from "next/link";
import Navbar from "../../molecules/Navbar";


const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>

                <Navbar />

                <Box flexGrow={1}>
                    <Typography variant="h5"  component={Link} href="/"  >
                        NextApp
                    </Typography>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header