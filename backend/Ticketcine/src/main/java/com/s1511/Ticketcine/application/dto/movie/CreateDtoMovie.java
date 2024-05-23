package com.s1511.Ticketcine.application.dto.movie;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

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
        String image,
        @NotNull
        List<String> genre
) {
}
