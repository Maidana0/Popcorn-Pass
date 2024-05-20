package com.s1511.Ticketcine.application.dto.movie;

import java.time.LocalDate;

public record ReadDtoMovie(
        Long id,
        String title,
        String cine,
        String description,
        LocalDate releaseDate,
        String comment,
        String rate,
        Boolean adult,
        String image
) {
}
