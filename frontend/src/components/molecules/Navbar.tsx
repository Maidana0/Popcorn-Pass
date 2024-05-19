import { Box, Drawer, Divider, ListItemText, List, ListItem, ListItemButton } from "@mui/material"
import { useMenuState } from '@/store/ui-store';
import { shallow } from "zustand/shallow";
import Link from "next/link";
import BoxButtonSvg from "@/components/atoms/BoxButtonSvg";

const Navbar = () => {
    const { isSideMenuOpen, openSideMenu, closeSideMenu, layoutBackgroundColor } = useMenuState(state => ({
        isSideMenuOpen: state.isSideMenuOpen,
        openSideMenu: state.openSideMenu,
        closeSideMenu: state.closeSideMenu,
        layoutBackgroundColor: state.layoutBackgroundColor
    }), shallow)

    const handleMenuState = () => isSideMenuOpen ? closeSideMenu() : openSideMenu()


    return (<>

        <BoxButtonSvg
            alt="open-menu"
            handleClick={handleMenuState}
            sizesInPx={{ height: 40, width: 40 }}
            path="/images/header/menu.svg"
        />


        <Drawer
            open={isSideMenuOpen}
            onClose={handleMenuState}
            sx={{
                '--Drawer-transitionDuration': isSideMenuOpen ? '0.4s' : '0.2s',
                '--Drawer-transitionFunction': isSideMenuOpen
                    ? 'cubic-bezier(0.79,0.14,0.15,0.86)'
                    : 'cubic-bezier(0.77,0,0.18,1)',
                '& .MuiDrawer-paper': {
                    bgcolor: layoutBackgroundColor,
                    color: "#fff",
                    width: { xs: "85%", sm: "65%", md: "40%" },

                },
            }}
        >

            <BoxButtonSvg
                sxBox={{ textAlign: "end", minHeight: "56px", alignItems: "center", p: "6px 8px" }}
                alt="close-menu"
                handleClick={handleMenuState}
                sizesInPx={{ height: 40, width: 40 }}
                path="/images/header/close.svg"
            />

            <Box sx={{ width: '100%', height: "calc(100% - 56px)", display: "flex", marginTop: "auto", flexDirection: "column", justifyContent: "space-between" }} role="navigation" component="nav">
                <List>
                    {["iniciar sesión", "registrarme"].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton LinkComponent={Link} href={`/${text}`} sx={{ p: 2 }}>
                                <ListItemText primary={text}
                                    primaryTypographyProps={{ textTransform: "capitalize", fontSize: "1.33rem", textAlign: 'center' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>

                <Divider />

                <Box>
                    <ListItemText sx={{ color: "lightslategray", textAlign: "center", p: 2 }}>
                        Hola programador, estas codeando solo? Enserio? 🥵
                    </ListItemText>
                </Box>

            </Box>
        </Drawer>


    </>)
}

export default Navbar

