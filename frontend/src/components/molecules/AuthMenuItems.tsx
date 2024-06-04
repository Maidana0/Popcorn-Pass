import { MenuItem, ListItemIcon } from '@mui/material'
import Link from 'next/link'
import { Fragment, FC } from 'react'

const AuthMenuItems: FC<{ handleClick: VoidFunction }> = ({ handleClick }) => {
    return (<Fragment>
        <MenuItem onClick={handleClick}>
            <ListItemIcon>

            </ListItemIcon>
            <Link href="/usuario/iniciar-sesion" style={{ width: "100%" }}>
                Iniciar Sesión
            </Link>
        </MenuItem>
        <MenuItem onClick={handleClick}>
            <ListItemIcon>

            </ListItemIcon>
            <Link href="/usuario/registro" style={{ width: "100%" }}>
                Registrarme
            </Link>
        </MenuItem>
    </Fragment>)
}

export default AuthMenuItems