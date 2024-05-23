"use client"
import { useForm } from "react-hook-form"
import { Box, Button, Divider, Typography } from "@mui/material"
import Link from "next/link"
import FieldsLogin from "../molecules/FieldsLogin"
import InputMui from "../atoms/InputMui"
import { namesValidation, passwordValidation } from "@/data/commonFormValidation"
import { fetchData } from "../../utils/fetchData"
import { useState } from "react"

// REVISAR POR QUÉ FALLA CONQ AUTOCOMPLETADO
const FormRegister = () => {
    const [alreadyRegister, setAlreadyRegister] = useState(false)

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm()
    const onSubmit = handleSubmit(async (data) => {
        const res = await fetchData("user/register","POST",data)
        console.log("DATOS ENVIADOS Y RESPUESTA: ", { data, res });

        if (res.id) {
            reset()
            setAlreadyRegister(true)
            setTimeout(() => setAlreadyRegister(false), 8000);
        }
    })

    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: ".7rem", width: "100%" }}
        >

            <Typography color="var(--gray-color)" variant="h5">
                Datos Personales
            </Typography>

            <Box display="flex" gap="1rem">
                <InputMui inputName="firstName" inputType="text" inputLabel="Nombre"
                    inputRegister={register("firstName", namesValidation)}
                    inputHelperText={String(errors.firstName?.message)}
                    inputError={errors.firstName ? true : false}
                />

                <InputMui inputName="lastName" inputType="text" inputLabel="Apellido"
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

            <InputMui inputName="confirmPassword" inputType="password"
                inputLabel={"Confirme su contraseña"}
                inputHelperText={String(errors.confirmPassword?.message)}
                inputError={errors.confirmPassword ? true : false}
                inputRegister={register("confirmPassword", {
                    ...passwordValidation,
                    validate: value => value == watch("password") ? true : "No coincide con su contraseña."
                })}
            />

            <Divider sx={{ bgcolor: "var(--gray-color)", margin: "12px 0" }} />

            {alreadyRegister &&
                <Typography color="var(--yellow)" textAlign="center" variant="h5" children="Usuario registrado correctamente!" />}

            <Button type="submit" variant="contained" color="warning" children="Registrarme" />

            <Button type="button" LinkComponent={Link} href={"/usuario/iniciar-sesion"} variant="contained"
                children="Iniciar Sesión" color="info" sx={{ bgcolor: "var(--black)" }} />

        </Box>
    )
}

export default FormRegister