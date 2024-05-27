"use client"

import { Container, SxProps, Box } from "@mui/material"
import SearchInput from "../atoms/SearchInput"
import FilterModal from "../atoms/FilterModal"
import InputSelected from "../atoms/InputSelected"

interface Props {
  inComingSoon: boolean
}

const styleContainer: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: { xs: "column", sm: "row" },
  gap:"1rem",
  marginBottom: "2.5rem",
  flexWrap: "wrap",
}

const MovieFilters = ({ inComingSoon }: Props) => {
  return (
    <Container sx={styleContainer}>
      {/* <SearchInput /> */}
      <Box display="flex" justifyContent="space-between" gap="1rem">
        <InputSelected />
        <InputSelected />
      </Box>
      {!inComingSoon && <FilterModal />}
    </Container>
  )
}

export default MovieFilters