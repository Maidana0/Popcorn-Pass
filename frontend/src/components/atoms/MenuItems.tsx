import { Avatar, Divider, ListItemIcon, MenuItem } from '@mui/material'
import { FC, Fragment } from 'react'

interface Props {
    handleClose: VoidFunction,
    logOut: VoidFunction,
    firstName: string,
}

const MenuItems: FC<Props> = ({ handleClose, firstName, logOut }) => {
    return (
        <Fragment>
            <MenuItem onClick={handleClose}>
                <Avatar sx={{ bgcolor: "var(--black)", color: "var(--gray-color)" }}>
                    {firstName.charAt(0)}
                </Avatar>
                Editar perfil
            </MenuItem>

            <MenuItem onClick={handleClose}>
                <ListItemIcon>

                </ListItemIcon>
                Tickets
            </MenuItem>

            <MenuItem onClick={handleClose}>
                <ListItemIcon>

                </ListItemIcon>
                Mis comentarios
            </MenuItem>
            <Divider />
            <MenuItem onClick={() => {
                handleClose()
                logOut()
            }} sx={{ "&:hover": { bgcolor: "#ac00007d!important" } }}>
                <ListItemIcon>
                </ListItemIcon>
                Cerrar sesión
            </MenuItem>
        </Fragment>
    )
}

export default MenuItems