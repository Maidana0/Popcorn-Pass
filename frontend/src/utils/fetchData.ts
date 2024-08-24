
export const fetchData = async (path: string, method?: "GET" | "PUT" | "POST" | "DELETE", body?: object, token?: string): Promise<any> => {
    try {
        const api_path = process.env.MODE != "only-front" ? process.env.PROD_API_PATH : process.env.THMDB_API_PATH;
        const headers: HeadersInit = { "Content-Type": "application/json" };
        token
            ? (headers["Authorization"] = `Bearer ${token}`)
            : (headers["Authorization"] = `Bearer ${process.env.TOKEN_THMDB}`)
        const options: RequestInit = { method, headers }
        body && method != "GET" && (options.body = JSON.stringify(body))

        const res = await fetch(`${api_path}/${path}`, options)

        return await res.json()
    } catch (error) {
        console.log(error);
        return { message: "ERROR DURANTE EL FETCH", error }

    }
}
