import FormRegister from "@/components/organism/FormRegister";
import { Container, Typography } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro",
};

const Login = () => {
  return (
    <Container sx={{ backgroundColor: "var(--lightBlack)", margin: "2rem auto", borderRadius: "20px", padding: "3rem 1rem",width:{xs:"90%",sm:"475px"} }}>
      <Typography variant="h4" textAlign="center" sx={{margin: ".5rem auto 2rem" }}>
      Registrate en NextApp
      </Typography>

      <FormRegister />
    </Container>
  )
}

export default Login