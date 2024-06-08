interface IRoute {
    name: string;
    path: string;
}

const routes: ReadonlyArray<IRoute> = Object.freeze([
    {
        name: "inicio",
        path: "/"
    },
    {
        name: "peliculas",
        path: "/peliculas/en-pantalla"
    },
    {
        name: "promociones",
        path: "/#"
    },
    {
        name: "nosotros",
        path: "/nosotros"
    },
]);

export default routes;
