"use client"
import { useForm } from "react-hook-form"
import { Box, Button, Divider, Typography } from "@mui/material"
import Link from "next/link"
import FieldsLogin from "../molecules/FieldsLogin"
import { fetchData } from "../../utils/fetchData"
import { ILoginUser, useAuthStore } from "@/store/auth-store"

// EN PROCESO
import { useRouter } from "next/navigation"
import { shallow } from "zustand/shallow"
const FormLogin = () => {
    const router = useRouter()
// EN PROCESO || DEBERIAMOS DE REDIRIGIR AL USUARIO PARA QUE CONTINUE SU PROCESO DE SELECCIÓN

    const { register, handleSubmit, formState: { errors, } } = useForm()
    const { isLogged, logIn, message, setMessage } = useAuthStore(state => ({
        isLogged: state.isLogged,
        logIn: state.logIn,
        message: state.message,
        setMessage: state.setMessage
    }), shallow)

    const onSubmit = handleSubmit(async (data): Promise<void> => {
        const res: ILoginUser = await fetchData("login", "POST", data)
        console.log("DATOS ENVIADOS Y RESPUESTA: ", { data, res });
        res.jwt ? logIn(res) : setMessage("Usuario y/o contraseña incorrecto.")
    })

    // REDIRIGIR AL USUARIO PARA QUE CONTINUE SU PROCESO DE SELECCIÓN
    if (isLogged) router.replace("/")
    // EN PROCESO

    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: ".7rem", width: "100%" }} >

            <FieldsLogin register={register} errors={errors} />

            {message && <Typography textAlign="center" children={message} color={"darkred"} />}

            <Divider sx={{ bgcolor: "var(--gray-color)", margin: "12px 0" }} />

            <Button type="submit" variant="contained" color="warning">
                Iniciar Sesión
            </Button>

            <Button type="button" LinkComponent={Link} href={"/usuario/registro"} variant="contained" color="info" sx={{ bgcolor: "var(--black)" }} >
                Registrarme
            </Button>

            <Button variant="text" LinkComponent={Link} href="#" children="Recuperar mi cuenta" color="primary" />
        </Box>
    )
}

export default FormLogin