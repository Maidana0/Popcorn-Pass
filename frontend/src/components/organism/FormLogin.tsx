"use client"
import { useForm } from "react-hook-form"
import { Box, Button, Divider } from "@mui/material"
import Link from "next/link"
import FieldsLogin from "../molecules/FieldsLogin"

const FormLogin = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })

    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: ".7rem", width: "100%" }} >

            <FieldsLogin register={register} errors={errors}/>

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