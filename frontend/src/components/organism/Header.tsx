import { AppBar, Toolbar, Typography, Box } from "@mui/material"

import Link from "next/link";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../molecules/SliderNavbar"), { ssr: false, loading: () => <span style={{ width: "64px" }} /> })

const TabNavbar = dynamic(() => import("../molecules/TabNavbar"), { ssr: false })


const Header = () => {

    return (
        <AppBar position="static">
            <Toolbar>

                {/* <Navbar /> */}

                <Box flexGrow={1}>
                    <Typography variant="h5" component={Link} href="/"  >
                        NextApp
                    </Typography>
                </Box>

                {/* <TabNavbar /> */}

            </Toolbar>
        </AppBar>
    )
}

export default Header