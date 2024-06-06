package com.s1511.ticketcine.infrastructure.controllers;

import com.s1511.ticketcine.application.dto.functionDetails.ReadDtoFunctionDetails;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.ticketcine.domain.services.FunctionDetailsService;

import java.util.List;

@RestController
@RequestMapping("/functionDetails")
public class FunctionDetailsController {

    @Autowired
    private FunctionDetailsService functionDetailsService;


    @GetMapping("screenByMovieId/{idMovie}")
    public ResponseEntity<ReadDtoMovie> getScreenByMovieId(@PathVariable String idMovie){
        ReadDtoMovie dto = functionDetailsService.getMovieById(idMovie);
        return ResponseEntity.ok(dto);
    }

    @GetMapping("/createFunctions")
    public void createFunctionsForScreen(){
        functionDetailsService.createFunctionsForScreen();
    }

    @GetMapping("/functionDetailsByCinemaIdAndMovieId/{cinemaId}/{movieId}")
    public ResponseEntity<List<ReadDtoFunctionDetails>> getFunctionsDetailsByCinemaIdAndMovieId(@PathVariable String cinemaId,@PathVariable String movieId){
        return ResponseEntity.ok(functionDetailsService.getFunctionsDetailsByCinemaIdAndMovieId(cinemaId,movieId));
    }
    @GetMapping("/functionDetailsByMovieId/{movieId}")
    public ResponseEntity<List<ReadDtoFunctionDetails>> getFunctionsDetailsByMovieId(@PathVariable @NotNull String movieId){
        return ResponseEntity.ok(functionDetailsService.getFunctionsDetailsByMovieId(movieId));
    }
}
