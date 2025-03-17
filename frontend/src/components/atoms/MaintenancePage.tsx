"use client";

import { Container, Card, CardContent, Typography, Button } from "@mui/material";
import Image from "next/image";

const MaintenancePage = () => {
  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", height: "auto", my: 10 }}>
      <Card sx={{ textAlign: "center", boxShadow: 3, borderRadius: 2 }}>
        <Image
          src="/images/cinemas/5.jpg"
          alt="Sitio en mantenimiento"
          width={300}
          height={280}
          style={{ width: "100%", height: "280px", objectFit: "cover", margin: "auto", color: "gray" }}
        />
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            🚧 Sitio en mantenimiento 🚧
          </Typography>
          <Typography variant="body1" sx={{ my: 2 }}>
            Estamos trabajando en este sitio. Vuelve más tarde para ver las actualizaciones.
          </Typography>
          <Button variant="contained" color="warning" onClick={() => window.location.href = "/"}>
            Volver al inicio
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MaintenancePage;
