"use client";

import { Container, Card, CardContent, Typography, Button } from "@mui/material";
import Image from "next/image";

const MaintenancePage = () => {
  return (
    <Container maxWidth="sm" sx={{ display: "flex", justifyContent: "center", height: "auto", my: 10 }}>
      <Card sx={{ textAlign: "center", p: 3, boxShadow: 3, borderRadius: 2 }}>
        <Image
          src="https://w7.pngwing.com/pngs/476/886/png-transparent-man-holding-wrench-preventive-maintenance-total-productive-maintenance-predictive-maintenance-planned-maintenance-repair-service-hand-people-thumbnail.png"
          alt="Sitio en mantenimiento"
          width={100}
          style={{ width: "100px", margin: "0 auto 16px" }}
        />
        <CardContent>
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
