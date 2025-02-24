import fakeCinemas from "@/data/cinemas.json"
import { ICinema } from "@/store/cinema-store";
import { fetchData } from "@/utils/fetchData";



export const getCities = async (): Promise<string[]> => {
    if (process.env.MODE != "only-front") {
        return await fetchData("cinema/cities", "GET")
    }
    return fakeCinemas.map(cinema => cinema.CIUDAD)
};



export const getCinemaListByCity = async (currentCity: string, city: string, setCinemaList:
    (cineList: ICinema[] | false) => void): Promise<any> => {

    if (currentCity && !city) {
        //  PEDIR LISTA DE CINES DEPENDIENDO DE LA CIUDAD SELECCIONADA
        let res;
        if (process.env.MODE == "only-front") {
            res = Array(dtoCinema(fakeCinemas.find(cine => cine.CIUDAD == currentCity)))
        } else {
            res = await fetchData(`cinema/cinemasByCity/${currentCity}`)
        }

        setCinemaList(res)
        return
    }


    if (city && city !== "empty") {
        //  PEDIR LISTA DE CINES DEPENDIENDO DE LA CIUDAD SELECCIONADA
        let res;
        if (process.env.MODE == "only-front") {
            res = Array(dtoCinema(fakeCinemas.find(cine => cine.CIUDAD == city)))
        } else {
            res = await fetchData(`cinema/cinemasByCity/${city}`)
        }

        setCinemaList(res)
        return
    }
}


const dtoCinema = (cinema: any): ICinema => {
    return {
        id: cinema.ID,
        name: cinema.NOMBRE,
        city: cinema.CIUDAD,
        direction: cinema.DIRECCION,
        state: cinema.PROVINCIA,
    }
}