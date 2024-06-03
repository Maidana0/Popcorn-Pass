"use client"
import { Tabs, Tab, useTheme, useMediaQuery } from "@mui/material"
import Link from "next/link";
import routes from "@/data/routesData";
import isLinkActive from "@/utils/isLinkActive";
import { Fragment } from "react";

const TabNavbar = () => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))

    const linkActive = isLinkActive()

    if (isMatch) { return }
    return <Fragment>
        <Tabs component={"ul"}
            value={linkActive !== -1 ? linkActive : false}
            textColor="inherit"
            indicatorColor="secondary"
            sx={{
                flexGrow: 1,
                '& .MuiTabs-indicator': { bgcolor: "#fff" },
            }}
        >

            {routes.map(({ path, name }, i) => {
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
    </Fragment>
}

export default TabNavbar
