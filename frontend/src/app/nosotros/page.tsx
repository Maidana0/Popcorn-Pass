import React from 'react';

const containerStyle: React.CSSProperties = {
  padding: '0 2rem',
};

const mainStyle: React.CSSProperties = {
  padding: '5rem 0',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  lineHeight: 1.15,
  fontSize: '4rem',
};

const sectionStyle: React.CSSProperties = {
  margin: '2rem 0',
  padding: '2rem',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  maxWidth: '800px',
  textAlign: 'center',
};

const sectionTitleStyle: React.CSSProperties = {
  marginBottom: '1rem',
  fontSize: '2rem',
};

const paragraphStyle: React.CSSProperties = {
  margin: 0,
  fontSize: '1.2rem',
};

const AboutUs: React.FC = () => {
  return (
    <div style={containerStyle}>
      <main style={mainStyle}>
        <h1 style={titleStyle}>Sobre Nosotros</h1>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Nuestra Misión</h2>
          <p style={paragraphStyle}>
            Nuestra misión es ofrecer la mejor experiencia de compra de entradas
            de cine, asegurando la satisfacción total de nuestros clientes.
            Creemos en la calidad, la integridad y la innovación.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Nuestro Equipo</h2>
          <p style={paragraphStyle}>
            Contamos con un equipo diverso de profesionales expertos en sus
            respectivos campos. Juntos, nos esforzamos por ofrecer excelencia en
            todo lo que hacemos.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={sectionTitleStyle}>Contáctanos</h2>
          <p style={paragraphStyle}>
            Si tienes alguna pregunta o deseas saber más sobre nuestros
            servicios, no dudes en contactarnos en peladoGuille@peladoGuille.com.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;

