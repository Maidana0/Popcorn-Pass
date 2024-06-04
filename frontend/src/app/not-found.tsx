import React from 'react';
import Link from 'next/link';

const NotFound: React.FC = () => {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>404 - Página no encontrada</h1>
            <p style={messageStyle}>Lo sentimos, la página que estás buscando no existe.</p>
            <Link href="/"  style={linkStyle}>Volver a la página principal
            </Link>
        </div>
    )
}

const containerStyle: React.CSSProperties = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
};

const titleStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '20px'
};

const messageStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '30px'
};

const linkStyle: React.CSSProperties = {
    fontSize: '1.1rem',
    color: '#007bff',
    textDecoration: 'none'
};

export default NotFound;
