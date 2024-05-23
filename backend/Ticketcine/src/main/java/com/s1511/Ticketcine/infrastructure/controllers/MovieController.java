package com.s1511.Ticketcine.infrastructure.controllers;

import com.s1511.Ticketcine.domain.entities.Movie;
import com.s1511.Ticketcine.domain.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/movie")
public class MovieController {

    private final MovieService movieService;
    @GetMapping("/moviesave")
    public ResponseEntity<Movie> saveLastestMovies(){
        return ResponseEntity.ok((Movie) movieService.saveLatestMovies());
    }

}
