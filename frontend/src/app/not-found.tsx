import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
    return (
        <div>
            <h1>404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <Link href="/">
                Volver a la página principal
            </Link>
        </div>
    )
}

export default NotFound;