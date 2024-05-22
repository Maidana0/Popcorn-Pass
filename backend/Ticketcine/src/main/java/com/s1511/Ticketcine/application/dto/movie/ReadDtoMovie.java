package com.s1511.Ticketcine.application.dto.movie;

import com.s1511.Ticketcine.domain.entities.Comment;

import java.time.LocalDate;
import java.util.List;

public record ReadDtoMovie(
        Long id,
        String title,
        String cinema,
        String description,
        LocalDate releaseDate,
        List<String> comment,
        String rate,
        Boolean adult,
        String image
) {
}
