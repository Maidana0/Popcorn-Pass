package com.s1511.Ticketcine.domain.services;

import com.s1511.Ticketcine.application.dto.movie.CreateDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.Ticketcine.domain.entities.Movie;

import java.time.LocalDateTime;
import java.util.List;

public interface MovieService {
    void saveLatestMovies();
    void saveMoviesToDatabase(List<Movie> movies);
    List<Movie> extractMoviesFromResponse(CreateDtoMovie response);
    List<Movie> filterMoviesByReleaseDate(List<Movie> movies, LocalDateTime today);
    ReadDtoMovie createMovie(CreateDtoMovie createDtoMovie) throws Exception;
    ReadDtoMovie getMovieById(String id);
    List<ReadDtoMovie> getMovieList();
    ReadDtoMovie getMovieByTitle(String title);
    List<ReadDtoMovie> getMovieByTime(LocalDateTime time);
    List<ReadDtoMovie> getMovieByGender(String gender);
    List<ReadDtoMovie> getMovieByAge(Boolean agePlus18);
    List<ReadDtoMovie> getMovieByThreeD(Boolean threeD);
}
