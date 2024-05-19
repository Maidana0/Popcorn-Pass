"use client"
import { Tabs, Tab, Box, Button } from "@mui/material"
import { usePathname } from "next/navigation";
import Link from "next/link";

const paths = ["login", "sign-up"]

const TabNavbar = () => {
    const pathName = usePathname()
    const activeTab = paths.findIndex(tab => pathName.endsWith(tab));

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

                {paths.map((text, i) => {
                    return (
                        <Tab
                            sx={{ fontSize: "1.1rem", }}
                            value={i }
                            tabIndex={i}
                            LinkComponent={Link}
                            href={`/${text}`}
                            key={i} label={text} />
                    )
                })}
            </Tabs>
            <Box>
                <Button variant="contained" color="error" children="Cerrar sesión" />
            </Box>
        </>)
}

export default TabNavbar
