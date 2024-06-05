package com.s1511.ticketcine.infrastructure.controllers;

import com.s1511.ticketcine.application.dto.cinema.ReadDtoCinema;
import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.ticketcine.domain.entities.Cinema;
import com.s1511.ticketcine.domain.services.CinemaService;
import jakarta.validation.constraints.NotNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.List;

@RestController
@RequestMapping("/cinema")
@RequiredArgsConstructor
public class CinemaController {

    private final CinemaService cinemaService;

    @GetMapping("/cities")
    private ResponseEntity<HashSet<String>> getCinemasCityName(){
        return ResponseEntity.ok(cinemaService.getCinemasCityName());
    }

    @GetMapping("/cinemasByCity/{city}")
    private ResponseEntity<List<ReadDtoCinema>> getCinemaListByCity(@PathVariable @NotNull String city){
        return ResponseEntity.ok(cinemaService.getCinemaListByCity(city));
    }
    @GetMapping("/moviesByCine/{cinemaId}")
    private ResponseEntity<List<ReadDtoMovie>> getMoviesByCine(@PathVariable @NotNull String cinemaId){
        return ResponseEntity.ok(cinemaService.getMoviesByCinema(cinemaId));
    }

}
