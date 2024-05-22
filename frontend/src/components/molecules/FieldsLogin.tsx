import React, { FC } from 'react'
import InputMui from "../atoms/InputMui"
import {emailValidation, passwordValidation} from "@/data/commonFormValidation"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IFieldsLoginProps {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors<FieldValues>;
}


const FieldsLogin: FC<IFieldsLoginProps> = ({ register, errors }) => {


    return <>
        <InputMui inputRegister={register("email", emailValidation)}
            inputName="email" inputLabel="Ingresa tu correo electronico"
            inputHelperText={String(errors.email?.message)}
            inputError={errors.email ? true : false}
        />

        <InputMui inputRegister={register("password", passwordValidation)}
            inputName="password" inputLabel="Ingresa tu contraseña"
            inputHelperText={String(errors.password?.message)}
            inputError={errors.password ? true : false}
        />
    </>
}

export default FieldsLogin