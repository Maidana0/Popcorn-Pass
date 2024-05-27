import * as React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { MenuItem, FormControl, Select, useTheme } from "@mui/material";


const InputSelected: any = () => {
    const [age, setAge] = React.useState("")
    const theme = useTheme()
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{
            width: { xs: "48%", sm: 220 }, textTransform: "uppercase",
            "& fieldset": { borderColor: "rgba(255, 255, 255, 0.2)" },
            "&:hover fieldset": { borderColor: "rgba(255, 255, 255, 0.5)!important" }
        }}>
            <Select
                value={age}
                onChange={handleChange}
                color="warning"
                displayEmpty
                inputProps={{
                    "aria-label": "Without label",
                    sx: { color: "var(--gray-color)", "&:hover": { color: "var(--gray-color)!important" } }
                }}
                sx={{ "& .MuiSelect-icon": { color: "var(--gray-color)" } }}

                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: "black",
                            color: "var(--gray-color)",
                            "& .MuiMenuItem-root": {
                                borderBottom: "solid 1px rgba(255, 255, 255, 0.15)",
                                backgroundColor: "inherit",
                                "&:hover": {
                                    color: "var(--white)",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                },
                                "&.Mui-selected": { color: theme.palette.warning.main, },
                            },
                        },
                    },
                }}
            >

                <MenuItem value="">
                    <em>Ciudad</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>ThThirty Thirtyirty</MenuItem>
            </Select>
        </FormControl >
    );


}


export default InputSelected