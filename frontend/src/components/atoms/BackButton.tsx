"use client"
import { Link as LinkMUI } from "@mui/material"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter()

    return <LinkMUI component="button" variant="body1" underline="hover"
        onClick={() => router.back()} children="Volver"
        sx={{
            "&:hover": { color: "var(--white)" },
            padding: "8px", color: "var(--gray-color)"
        }}
    />
}

export default BackButton