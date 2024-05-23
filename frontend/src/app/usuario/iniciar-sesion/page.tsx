import FormLogin from "@/components/organism/FormLogin";
import { Container, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar Sesión",
};

const Login = () => {
  return (
    <Container sx={{ backgroundColor: "var(--lightBlack)", margin: "2rem auto", borderRadius: "20px", padding: "3rem 1rem",width:{xs:"85%",sm:"450px"} }}>
      <Typography variant="h4" textAlign="center" sx={{margin: ".5rem auto 2rem" }}>
      Inicia Sesión en NextApp
      </Typography>

      <FormLogin />
    </Container>
  )
}

export default Login