"use client"
import { Container, Link as LinkMUI } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter()

    return <Container sx={{width:"fit-content", margin:"1.5rem 1rem .5rem"}}>
        <LinkMUI component="button" variant="body1" underline="hover"
            onClick={() => router.back()}
            sx={{
                "&:hover": { color: "var(--white)" },
                padding: "2px", color: "var(--gray-color)",
                display: "flex", alignItems: "center", gap: "3px"
            }}
        >
            <Image
                priority
                src={"/images/arrow-left.svg"}
                alt="arrow-left"
                width={22}
                height={22}
            />
            Volver
        </LinkMUI>
    </Container>
}

export default BackButton