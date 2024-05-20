package com.s1511.Ticketcine.application.dto.movie;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record CreateDtoMovie(
        @NotNull
        String title,
        @NotNull
        String description,
        @NotNull
        LocalDate releaseDate,
        @NotNull
        Boolean adult,
        @NotNull
        String image
) {
}
