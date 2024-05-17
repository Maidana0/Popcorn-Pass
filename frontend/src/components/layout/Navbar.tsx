"use client"

import { AppBar, IconButton, Toolbar, Typography, Box, Button } from "@mui/material"
import { useMenuState } from '@/store/ui-store';
import Link from "next/link";



const Navbar = () => {
    const isSideMenuOpen = useMenuState(state => state.isSideMenuOpen);
    const openSideMenu = useMenuState(state => state.openSideMenu);
    const closeSideMenu = useMenuState(state => state.closeSideMenu);

    const handleMenuState = () => isSideMenuOpen ? closeSideMenu() : openSideMenu()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton size="large" edge="start" color="inherit">
                    {/* logo */}
                </IconButton>

                <Typography variant="h5" sx={{ flexGrow: 1 }} component={Link} href="/"  >
                    NextApp
                </Typography>



                <Box sx={{ display: { xs: "none", md: "flex" } }}>
                    <Button color="inherit">inicar sesión</Button>
                </Box>

                {
                    isSideMenuOpen &&
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <Button color="inherit">inicar sesión</Button>
                    </Box>
                }


                <Box>
                    <Button onClick={handleMenuState} sx={{ display: { xs: "block", md: "none" } }} color="inherit" >
                        {isSideMenuOpen ? "Cerrar" : "Abrir"} Menú
                    </Button>

                </Box>


            </Toolbar>
        </AppBar>
    )
}

export default Navbar