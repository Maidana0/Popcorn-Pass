import { Box, Typography } from "@mui/material"
import { FC } from "react"

interface Props {
    name: string,
    lastname: string
    role: string,
    image: string
}

const TeamMemberCard: FC<Props> = ({ name, lastname, role, image }) => {
    return (
        <Box width={140} height={140} borderRadius={"50%"} boxShadow={5}
            sx={{
                backgroundImage: `url(/images/team/${image}.jfif)`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                cursor: "pointer"
            }}
            position="relative" overflow="hidden"
        >


            <Box display="flex" flexDirection="column" gap=".5rem" width={"100%"} height={"100%"}
                justifyContent={"center"} textAlign={"center"} alignItems={"center"} position="absolute" top={0} left={0}
                sx={{
                    backgroundColor: "rgba(0, 0, 0, 0.65)",
                    opacity: 0,
                    transition: "opacity 0.3s ease-in-out",
                    "&:hover": { opacity: 1 }
                }} >
                <Typography variant="subtitle1" px={1.5} component="h5" color="var(--white)" fontWeight={600}>
                    {name} {lastname}
                </Typography>

                <Typography variant="subtitle2" component="h6" color="var(--light-gray-color)" fontWeight={600}>
                    {role}
                </Typography>
            </Box>

        </Box>
    )
}

export default TeamMemberCard