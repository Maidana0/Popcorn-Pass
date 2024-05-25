import routes from "@/data/routesData";
import { usePathname } from "next/navigation";


const isLinkActive = () => {
    const pathName = usePathname()

   const indexLinkActive=  routes.findIndex(route => {
        const splitRoute = route.path.split('/');
        if ((splitRoute.length - 1) == 1) {
            return pathName.endsWith(route.path)
        }
        return pathName.includes(splitRoute[1])
    });

    return indexLinkActive
}

export default isLinkActive