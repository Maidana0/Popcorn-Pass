"use client"
import { Tabs, Tab, useTheme, useMediaQuery, Box, Button } from "@mui/material"
import { usePathname } from "next/navigation";
import Link from "next/link";
import routes from "@/data/routesData";

const TabNavbar = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
    const pathName = usePathname()
    const activeTab = routes.findIndex(route => pathName.endsWith(route.path));


    if (isMatch) { return }
    return (
        <>
            <Tabs component={"ul"}
                value={activeTab !== -1 ? activeTab : false}
                textColor="inherit"
                indicatorColor="secondary"
                sx={{
                    flexGrow: 1,
                    '& .MuiTabs-indicator': { bgcolor: "#fff" },
                }}
            >

                {routes.map(({path,name}, i) => {
                    return (
                        <Tab
                            sx={{ fontSize: "1.1rem", }}
                            value={i}
                            tabIndex={i}
                            LinkComponent={Link}
                            href={path}
                            key={i} label={name} />
                    )
                })}
            </Tabs>
            <Box>
                <Button variant="contained" LinkComponent={Link} href="/usuario/iniciar-sesion" color="warning" children="mi perfil"/>
                {/* <Button variant="contained" color="error" children="Cerrar sesión" /> */}
            </Box>
        </>)
}

export default TabNavbar
