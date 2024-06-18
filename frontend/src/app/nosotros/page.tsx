import TeamMemberCard from '@/components/atoms/TeamMemberCard';
import { Box, SxProps, Typography } from '@mui/material';
import React from 'react';
import teamData from '@/data/team.json'

export const metadata = {
  title: 'Sobre Nosotros - PopcornPass',
  description: 'Conoce más sobre nosotros.',
}

const mainStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const sectionStyled: SxProps = {
  margin: '1.5rem 0',
  padding: '2rem',
  boxShadow: '1px 1px 5px var(--light-gray-color)',
  borderRadius: '10px',
  maxWidth: '800px',
  textAlign: 'center',
  transition: "ease .5s",
  "&:hover": {
    backgroundColor: "var(--lightBlack)"
  }
}

const sectionTitleStyle: React.CSSProperties = {
  marginBottom: '1rem',
  fontSize: '2rem',
  textAlign: "start",
  color: "var(--white)"
};

const paragraphStyle: React.CSSProperties = {
  textAlign: "start",
  margin: 0,
  fontSize: '1.2rem',
  lineHeight: 1.6,
  color: "var(--light-white-color)",
};

const AboutUs: React.FC = () => {
  return (
    <>
      <Box sx={{ ...mainStyle, width: { xs: "85%", sm: "70%", md: "650px" }, margin: "auto" }}>
        <Typography variant="h3" lineHeight={1.15} component="h1" textAlign={"center"}>
          Sobre Nosotros
        </Typography>

        <Box component={"section"} sx={sectionStyled}>
          <h2 style={sectionTitleStyle}>Nuestra Misión</h2>
          <p style={paragraphStyle}>
            Nuestra misión es ofrecer la mejor experiencia de compra de entradas
            de cine, asegurando la satisfacción total de nuestros clientes.
            Creemos en la calidad, la integridad y la innovación.
          </p>
        </Box>

        <Box component={"section"} sx={sectionStyled}>
          <h2 style={sectionTitleStyle}>Nuestro Equipo</h2>
          <p style={paragraphStyle}>
            Contamos con un equipo diverso de profesionales expertos en sus
            respectivos campos. Juntos, nos esforzamos por ofrecer excelencia en
            todo lo que hacemos.
          </p>
        </Box>

        <Box component={"section"} sx={sectionStyled}>
          <h2 style={sectionTitleStyle}>Contáctanos</h2>
          <p style={paragraphStyle}>
            Si tienes alguna pregunta o deseas saber más sobre nuestros
            servicios, no dudes en contactarnos en contacto@ticketera.com.
          </p>
        </Box>

      </Box>

      <Typography variant="h3" px={2} lineHeight={1.15} my={"3rem"} component="h2" textAlign={"center"}>
        Nuestro Equipo
      </Typography>


      <Box display={"flex"} margin={"2rem auto"} justifyContent={"space-evenly"} alignItems={"center"} flexWrap={"wrap"} gap={"1.5rem 0"}>

        {teamData.map(data => (
          <TeamMemberCard key={data.lastname} name={data.name} lastname={data.lastname} role={data.role} image={data.image} />
        ))}
      </Box>
    </>
  );
};

export default AboutUs;

