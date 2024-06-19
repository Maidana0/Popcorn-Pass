import { itemsMenu } from '@/data/routesData'
import { Avatar, Divider, ListItemIcon, MenuItem } from '@mui/material'
import Image from 'next/image'
import { FC, Fragment } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
    handleClose: VoidFunction,
    logOut: VoidFunction,
    firstName: string,
    id: string,
}

const MenuItems: FC<Props> = ({ handleClose, id, firstName, logOut }) => {
    const router = useRouter()

    return (
        <Fragment>
            <MenuItem onClick={() => {
                handleClose()
                router.push(`/usuario/perfil/${id}`)
            }}>
                <Avatar sx={{ bgcolor: "var(--black)", color: "var(--gray-color)" }}>
                    {firstName.charAt(0)}
                </Avatar>
                Editar Perfil
            </MenuItem>

            {itemsMenu.map((item, index) => (
                <MenuItem key={`${item.icon}-${index}`} itemID={item.icon}
                    onClick={() => {
                        handleClose()
                        router.push(`/usuario/perfil/${id}/${item.path}`)
                    }}>
                    <ListItemIcon>
                        <Image src={`/images/header/${item.icon}.svg`} alt={item.icon} width={22} height={22} />
                    </ListItemIcon>
                    {item.name}
                </MenuItem>
            ))}


            <Divider />
            <MenuItem onClick={() => {
                handleClose()
                logOut()
            }} sx={{ "&:hover": { bgcolor: "#ac00007d!important" } }}>
                <ListItemIcon>
                    <Image src={`/images/header/logout-icon.svg`} alt={"logout-icon"} width={22} height={22} />
                </ListItemIcon>
                Cerrar sesión
            </MenuItem>
        </Fragment>
    )
}

export default MenuItems