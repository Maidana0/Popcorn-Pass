
import { Rating } from "@mui/material";

const CalificationStar = ({ vote_average, active, handleStarChange, newRating }: { vote_average?: number | null, active?: boolean, handleStarChange?: any, newRating?: number }) => {


    if (active) return <Rating
        name="half-rating"
        value={newRating}
        size="large"
        precision={0.5}
        onChange={handleStarChange}
    />

    return <Rating name="half-rating-read" size="large" precision={0.5} value={vote_average} readOnly sx={{
        '& .MuiRating-iconEmpty': {
            color: "#575757"
        }
    }} />

}

export default CalificationStar