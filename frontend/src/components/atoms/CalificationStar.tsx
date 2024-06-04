"use client"
import { useAuthStore } from "@/store/auth-store";
import { Rating } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { shallow } from "zustand/shallow";

const CalificationStar = ({ vote_average}: { vote_average?: number | null, active : boolean }) => {
    const [value, setValue] = useState<number | null>(vote_average || 7)

    const { isLogged } = useAuthStore(state => ({ isLogged: state.isLogged }), shallow)


    const handleChange = (event: SyntheticEvent, newValue: number | null) => setValue(newValue)

    if (isLogged) return <Rating
        name="half-rating"
        value={value}
        size="large"
        precision={0.5} 
        onChange={handleChange}
    />

    return <Rating name="half-rating-read" size="large" precision={0.5} value={value} readOnly sx={{
        '& .MuiRating-iconEmpty': {
            color: "#575757"
        }
    }} />

}

export default CalificationStar