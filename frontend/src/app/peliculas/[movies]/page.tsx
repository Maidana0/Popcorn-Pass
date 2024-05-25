import Loader from "@/components/atoms/Loader";
import { Box, Button, Container, Typography } from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
    title: "Peliculas"
};

const Page = ({ params }: { params: { movies: "en-pantalla" | "proximamente" } }) => {
    const { movies } = params
    const inComingSoon = movies == "proximamente"
    if (movies != "en-pantalla" && !movies) return <h1 style={{ margin: "auto", textAlign: "center" }}>404 - Not Found</h1>

    return (
        <Container sx={{ margin: "2.3rem auto", padding: "2.3rem 1rem" }}>
            <Box component="div" display="flex" marginBottom="2.5rem" alignItems="center" gap="1rem"
                sx={{ flexDirection: { xs: "column", md: "row" }, justifyContent: { xs: "center", md: "space-between" } }}>

                <Typography variant="h3" textAlign={{ xs: "center", md: "left" }} children="Peliculas" />

                <Box component="div" textAlign="center">
                    <Button color="warning" variant={!inComingSoon ? "contained" : "outlined"} LinkComponent={Link} href={inComingSoon ? "en-pantalla" : "#"}
                        children="en pantalla"
                        sx={{
                            height: "53px", fontWeight: 700, borderRadius: "8px 0 0 8px",
                            color: !inComingSoon ? "var(--black)" : "",
                        }} />

                    <Button color="warning" variant={inComingSoon ? "contained" : "outlined"} LinkComponent={Link} href={!inComingSoon ? "proximamente" : "#"}
                        children="proximamente"
                        sx={{
                            height: "53px", fontWeight: 700, borderRadius: "0 8px 8px 0",
                            color: inComingSoon ? "var(--black)" : "",
                        }} />
                </Box>
            </Box>

            <Loader />


        </Container>
    )


}

export default Page