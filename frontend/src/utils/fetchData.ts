import { useAuthStore } from "@/store/auth-store";


export const fetchData = async (path: string, method: "GET" | "PUT" | "POST" | "DELETE", body: object): Promise<any> => {
    try {
        const token: String = useAuthStore(state => state.jwt) || " "
        const res = await fetch(`http://localhost:8080/${path}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
            body: body ? JSON.stringify(body) : null
        })
        if (!res.ok) throw new Error("Error en la solicitud: " + res.statusText)
        return await res.json()
    } catch (error) {
        console.log(error);
        return { message: "ERROR DURANTE EL FETCH", error }

    }
}
