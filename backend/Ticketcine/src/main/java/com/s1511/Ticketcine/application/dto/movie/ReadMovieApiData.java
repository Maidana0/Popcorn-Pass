package com.s1511.Ticketcine.application.dto.movie;

import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.util.List;

public record ReadMovieApiData(
        Boolean adult,
        String backdropPath,
        List<Integer> gendreIds,
        Long id,
        String originalLenguage,
        String overview,
        Long popularity,
        String posterPath,
        String releaseDate,
        String title,
        Boolean video,
        Long voteAverage,
        Long voteCount
) {
}
