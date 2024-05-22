"use client"
import { useForm } from "react-hook-form"
import { Box, Button, Divider, Typography } from "@mui/material"
import Link from "next/link"
import FieldsLogin from "../molecules/FieldsLogin"
import InputMui from "../atoms/InputMui"
import {namesValidation} from "@/data/commonFormValidation"


const FormRegister = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })


    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: ".7rem", width: "100%" }} >


            <Typography color="var(--gray-color)" variant="h5">
                Datos Personales
            </Typography>

            <Box display="flex" gap="1rem">
                <InputMui inputName="firstName" inputLabel="Ingresa tu Nombre" inputType="text"
                    inputRegister={register("firstName", namesValidation)}
                    inputHelperText={String(errors.firstName?.message)}
                    inputError={errors.firstName ? true : false}

                />

                <InputMui inputName="lastName" inputLabel="Ingresa tu Apellido" inputType="text"
                    inputRegister={register("lastName", namesValidation)}
                    inputHelperText={String(errors.lastName?.message)}
                    inputError={errors.lastName ? true : false}
                />
            </Box>

            <Divider sx={{ bgcolor: "var(--gray-color)", margin: "12px 0" }} />

            <Typography color="var(--gray-color)" variant="h5">
                Datos de Ingreso
            </Typography>

            <FieldsLogin register={register} errors={errors} />

            <Divider sx={{ bgcolor: "var(--gray-color)", margin: "12px 0" }} />

            <Button type="submit" variant="contained" color="warning">
                Registrarme
            </Button>

            <Button type="button" LinkComponent={Link} href={"/usuario/iniciar-sesion"} variant="contained" color="info" sx={{ bgcolor: "var(--black)" }} >
                Iniciar Sesión
            </Button>
        </Box>
    )
}

export default FormRegister