package com.s1511.ticketcine.domain.services;

import com.s1511.ticketcine.application.dto.functionDetails.ReadDtoFunctionDetails;
import org.springframework.http.ResponseEntity;

import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;

import java.util.List;

public interface FunctionDetailsService {

    void createFunctionsForScreen();

    List<ReadDtoFunctionDetails> getFunctionsDetailsByCinemaIdAndMovieId(String cinemaId, String movieId);

    List<ReadDtoFunctionDetails> getFunctionsDetailsByMovieId(String movieId);
}
