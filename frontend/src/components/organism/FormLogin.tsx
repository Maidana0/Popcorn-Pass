"use client"
import { useForm } from "react-hook-form"
import { Box, Button, Divider, Typography } from "@mui/material"
import Link from "next/link"
import FieldsLogin from "../molecules/FieldsLogin"
import { fetchData } from "../../utils/fetchData"

import { useState } from "react"
import Image from "next/image"

// GUARDAR LOS DATOS RECIBIDOS UTILIZANDO ZUSTAND
const FormLogin = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm()
    const [isLogged, setIsLogged] = useState({ logged: false, message: "" })

    const onSubmit = handleSubmit(async (data) => {
        const res = await fetchData("login", "POST", data)
        console.log("DATOS ENVIADOS Y RESPUESTA: ", { data, res });

        if (res.jwt) {
            setIsLogged({ logged: true, message: "Sesión iniciada correctamente" })
            return
        }
        
        return setIsLogged({ logged: false, message: "Usuario y/o contraseña incorrecto." })
    })

    if (isLogged.logged == true) return <Box textAlign={"center"} component="div">
        <Image
            alt="Lisa dancing"
            width={364}
            height={380}
            src={"/images/temporal.gif"}
        />
        <Typography color="var(--yellow)" variant="h5">
            Usuario conectado correctamente!
        </Typography>
    </Box>
    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: ".7rem", width: "100%" }} >

            <FieldsLogin register={register} errors={errors} />

            <span style={{ color: "darkred" }}>
                {!isLogged.logged && isLogged.message}
            </span>
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