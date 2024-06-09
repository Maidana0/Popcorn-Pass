"use client"
import { FC } from "react"
import { Box, Typography } from "@mui/material"
import BoxButtonSvg from "../atoms/BoxButtonSvg"
import { priceFormat } from "@/utils/utils"

const pricePerSeat = 4400

interface Props {
    numberSeats: number,
    setNumberSeats: (value: number) => void
}

const AmountSeats: FC<Props> = ({ numberSeats, setNumberSeats }) => {
    const addSeat = () => numberSeats < 10 && setNumberSeats(numberSeats + 1)
    const removeSeat = () => numberSeats > 1 && setNumberSeats(numberSeats - 1)

    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my:2, px: 1, flexDirection: { xs: "column", sm: "row" } }}>
            <Box sx={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: { xs: "space-between", sm: "flex-start" }, width: { xs: "90%" } }}>
                <Typography variant="h5" component={"p"}>
                    Butacas:
                </Typography>
                <Box display="flex" gap="6px">
                    <BoxButtonSvg
                        path={"/images/seats/remove.svg"}
                        sizesInPx={{ width: 24, height: 24 }}
                        handleClick={removeSeat}
                        alt="remove-seat"
                        sxBox={{ width: "fit-content" }}
                        sxButton={{ minWidth: "34px" }}
                    />
                    <Typography variant="h5" component={"p"}>
                        {numberSeats}
                    </Typography>
                    <BoxButtonSvg
                        path={"/images/seats/add.svg"}
                        sizesInPx={{ width: 24, height: 24 }}
                        handleClick={addSeat}
                        alt="add-seat"
                        sxBox={{ width: "fit-content" }}
                        sxButton={{ minWidth: "34px" }}
                    />
                    {numberSeats >= 10 &&
                        <Typography variant="caption" component={"span"} color={"var(--yellow)"}>
                            Máximo 10
                        </Typography>
                    }
                </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "16px", alignItems: "center", justifyContent: { xs: "space-between", sm: "flex-end" }, width: { xs: "90%" } }}>
                <Typography variant="h5" component={"p"}>
                    Precio:
                </Typography>
                <Typography variant="h5" component={"p"}>
                    {priceFormat(pricePerSeat * numberSeats)}
                </Typography>
            </Box>
        </Box>)
}

export default AmountSeats