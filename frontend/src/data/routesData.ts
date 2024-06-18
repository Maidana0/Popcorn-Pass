interface IRoute {
    name: string;
    path: string;
}

const routes: ReadonlyArray<IRoute> = Object.freeze([
    {
        name: "peliculas",
        path: "/peliculas/en-pantalla"
    },
    {
        name: "puntos",
        path: "/puntos"
    },
    {
        name: "promociones",
        path: "/promociones"
    },
    {
        name: "cines",
        path: "/cines"
    },
    {
        name: "nosotros",
        path: "/nosotros"
    },
]);

export default routes;




interface Item {
    name: string
    path: string
    icon: string
}

export const itemsMenu: ReadonlyArray<Item> = Object.freeze([
    { name: "Mis Tickets", path: "tickets", icon: "ticket-icon" },
    { name: "Mis Comentarios", path: "comentarios", icon: "comment-icon" },
    { name: "Mis Beneficios", path: "beneficios", icon: "gift-icon" },
])