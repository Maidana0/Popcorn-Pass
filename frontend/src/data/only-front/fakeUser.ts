import { ILoginUser } from "@/store/auth-store"

const fakeUser: ILoginUser = Object.freeze({
    jwt: "no existe",
    rol: "USER",
    id: "01",
    firstName: "Franco",
    lastName: "Maidana",
    moviePoints: 10000
})

export default fakeUser