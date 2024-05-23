package com.s1511.Ticketcine.domain.services;

import com.s1511.Ticketcine.application.dto.movie.CreateDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadMovieApiData;
import com.s1511.Ticketcine.domain.entities.Movie;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface MovieService {
    List<Movie> saveLatestMovies();
    void saveMoviesToDatabase(List<Movie> movies);
    List<Movie> extractMoviesFromResponse(List<ResponseEntity<ReadMovieApiData>> response);
    List<Movie> filterMoviesByReleaseDate(List<Movie> movies, LocalDate today);
    ReadDtoMovie createMovie(CreateDtoMovie createDtoMovie) throws Exception;
    ReadDtoMovie getMovieById(String id);
    List<ReadDtoMovie> getMovieList();
    ReadDtoMovie getMovieByTitle(String title);
    List<ReadDtoMovie> findByReleaseDate(LocalDateTime time);
    //List<ReadDtoMovie> getMovieByGender(String gender);
    List<ReadDtoMovie> getMovieByAge(Boolean agePlus18);
    List<ReadDtoMovie> getMovieByThreeD(Boolean threeD);
    List<String> assignGenre(List<Integer> genre);
    List<Movie> filterMoviesByLenguage(List<Movie> movies);
}
