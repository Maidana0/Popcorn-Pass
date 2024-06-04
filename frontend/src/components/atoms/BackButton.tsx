"use client"
import { Link as LinkMUI } from "@mui/material"
import Image from "next/image"
import { useRouter } from "next/navigation"

const BackButton = () => {
    const router = useRouter()

    return <LinkMUI component="button" variant="body1" underline="hover"
        onClick={() => router.back()}
        sx={{
            "&:hover": { color: "var(--white)" },
            padding: "2px", color: "var(--gray-color)",
            display:"flex", alignItems:"center", gap:"3px"
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
}

export default BackButton