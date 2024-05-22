package com.s1511.Ticketcine.application.implementations;

import com.s1511.Ticketcine.application.dto.movie.CreateDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadMovieApiData;
import com.s1511.Ticketcine.application.mapper.MovieMapper;
import com.s1511.Ticketcine.application.security.AppConfig;
import com.s1511.Ticketcine.domain.entities.Movie;
import com.s1511.Ticketcine.domain.repository.MovieRepository;
import com.s1511.Ticketcine.domain.services.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MovieServiceImpl implements MovieService {
    private final String apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTM3ZDM1NTI0NDRhOWFkNDY0YTRkMGFiZmE2NDU2OCIsInN1YiI6IjY2NGFiZDZhZGQ5ZDQyN2M0MTkzMjM0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PaUBAej7XojVla0L2N6Lo-eDbXQMrpPvnOgdKMk3H7E";
    private final MovieMapper movieMapper;
    private final MovieRepository movieRepository;
    private final AppConfig appConfig;
    //private final RestTemplate restTemplate;

    @Override
    public void saveLatestMovies() {

        String url = "https://api.themoviedb.org/3/discover/movie?page=1&primary_release_date.gte=2024-05-21&sort_by=primary_release_date.asc";

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        headers.setBearerAuth("Bearer " + apiKey);

        HttpEntity<String> entity = new HttpEntity<>("", headers);

        ResponseEntity<ReadMovieApiData> response = appConfig.restTemplate().exchange(url, HttpMethod.GET, entity, ReadMovieApiData.class);
        // falta extraer las peliculas y guardarlas en la db
    }

    @Override
    public void saveMoviesToDatabase(List<Movie> movies) {
        movieRepository.saveAll(movies);
    }

    @Override
    public List<Movie> extractMoviesFromResponse(CreateDtoMovie response) {
        return null;
    }

    @Override
    public List<Movie> filterMoviesByReleaseDate(List<Movie> movies, LocalDateTime today) {
        return movies.stream()
                .filter(movie -> movie.getReleaseDate().isAfter(today.toLocalDate()) && movie.getReleaseDate().isBefore(today.toLocalDate().plusDays(14)))
                .collect(Collectors.toList());
    }

    @Override
    public ReadDtoMovie createMovie(CreateDtoMovie createDtoMovie) throws Exception {
        Optional<Movie> movieAlreadyExists = movieRepository.findByTitle(createDtoMovie.title());
        if(movieAlreadyExists.isPresent()){
            throw new Exception("esta pelicula ya esta guardada");
        }

        Movie movie = this.movieMapper.createDtoToMovie(createDtoMovie);
        movie.setActive(Boolean.TRUE);
        Movie movieAdded = movieRepository.save(movie);
        return movieMapper.movieToReadDto(movieAdded);
    }

    @Override
    public ReadDtoMovie getMovieById(String id) {
        Optional<Movie> movie = movieRepository.findById(id);
        return movieMapper.movieToReadDto(movie.orElse(null));
    }

    @Override
    public List<ReadDtoMovie> getMovieList() {
        List<Movie> movieList = movieRepository.findAll();
        return movieMapper.movieListToReadDtoList(movieList);
    }

    @Override
    public ReadDtoMovie getMovieByTitle(String title) {
        Optional<Movie> movie = movieRepository.findByTitle(title);

        return movieMapper.movieToReadDto(movie.orElse(null));
    }

    @Override
    public List<ReadDtoMovie> findByReleaseDate(LocalDateTime time) {
        List<Movie> movieList = movieRepository.findByReleaseDate(time);

        return movieMapper.movieListToReadDtoList(movieList);
    }

    /*@Override
    public List<ReadDtoMovie> getMovieByGender(String gender) {
        List<Movie> movieList = movieRepository.findByGender(gender);

        return movieMapper.movieListToReadDtoList(movieList);
    }*/

    @Override
    public List<ReadDtoMovie> getMovieByAge(Boolean agePlus18) {
        List<Movie> movieList = movieRepository.findByAdult(agePlus18);

        return movieMapper.movieListToReadDtoList(movieList);
    }

    @Override
    public List<ReadDtoMovie> getMovieByThreeD(Boolean threeD) {
        List<Movie> movieList = movieRepository.findByThreeD(threeD);

        return movieMapper.movieListToReadDtoList(movieList);
    }

}
