package com.s1511.Ticketcine.application.dto.movie;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ReadMovieApiData(
        @NotNull
        String title,
        @NotNull
        String description,
        @NotNull
        String releaseDate,
        @NotNull
        Boolean adult,
        @NotNull
        String image,
        @NotNull
        Boolean threeD,
        @NotNull
        Boolean subtitle
) {
}
