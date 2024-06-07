import routes from "@/data/routesData";


const isLinkActive = (pathName:string) => {
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