package com.s1511.Ticketcine.application.implementations;

import com.s1511.Ticketcine.application.dto.movie.CreateDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.Ticketcine.application.dto.movie.ReadMovieApiData;
import com.s1511.Ticketcine.application.mapper.MovieMapper;
import com.s1511.Ticketcine.application.security.AppConfig;
import com.s1511.Ticketcine.domain.entities.Movie;
import com.s1511.Ticketcine.domain.repository.MovieRepository;
import com.s1511.Ticketcine.domain.services.MovieService;
import com.s1511.Ticketcine.domain.utils.GenreCombert;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
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
    private static final Logger logger = LoggerFactory.getLogger(MovieServiceImpl.class);

    @Override
    public List<Movie> saveLatestMovies() {

        LocalDate today = LocalDate.now();

        // Set the start date in the URL to today's date
        String urlTemplate = "https://api.themoviedb.org/3/discover/movie?page=%d&primary_release_date.gte=%s&sort_by=primary_release_date.asc";

        // Iterate through pages 1 to 100
        for (int page = 1; page <= 33; page++) {
            String url = String.format(urlTemplate, page, today.toString());

            HttpHeaders headers = new HttpHeaders();
            headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
            headers.setBearerAuth("Bearer " + apiKey);

            HttpEntity<String> entity = new HttpEntity<>("", headers);

            List<ResponseEntity<ReadMovieApiData>> response = Collections.singletonList(appConfig.restTemplate().exchange(url, HttpMethod.GET, entity, ReadMovieApiData.class));

            // Extract movies from the response
            List<Movie> movies = extractMoviesFromResponse(response);

            // Filter movies based on release date (within 14 days from today)
            movies = filterMoviesByReleaseDate(movies, today);

            // Save filtered movies to the database
            saveMoviesToDatabase(movies);

        }
        return movieRepository.findAll();
    }

    @Override
    public void saveMoviesToDatabase(List<Movie> movies) {
        movieRepository.saveAll(movies);
    }

    @Override
    public List<Movie> extractMoviesFromResponse(List<ResponseEntity<ReadMovieApiData>> response) {
        List<Movie> movies = new ArrayList<>();

        if (response != null && !response.isEmpty()) {
            for (ResponseEntity<ReadMovieApiData> result : response) {
                if (result.getStatusCode().is2xxSuccessful()) {
                    ReadMovieApiData data = result.getBody();

                    if (data.originalLenguage() == "en" || data.originalLenguage() == "es") {
                        Movie movie = new Movie();
                        movie.setImage(data.posterPath());
                        movie.setTitle(data.title());
                        movie.setDescription(data.overview());
                        movie.setAdult(data.adult());
                        movie.setReleaseDate(LocalDate.parse(data.releaseDate())); // Assuming releaseDate is a String
                        movie.setThreeD(true);
                        if (data.originalLenguage() == "en"){
                            movie.setSubtitle(true);
                            }else {
                                movie.setSubtitle(false);
                        }
                        movie.setActive(true);
                        movie.setCinema(null);
                        movie.setComment(null);
                        movie.setRate(null);
                        movie.setGenre(assignGenre(data.gendreIds()));
                        movies.add(movie);
                    } else {
                        // Log or handle empty response body
                        logger.warn("Empty response body received from TMDb API for a successful response");
                    }
                } else {
                    // Handle unsuccessful response status code (log or throw exception)
                    logger.error("Error fetching movies from TMDb API: " + result.getStatusCode());
                    throw new RuntimeException("Failed to retrieve movies from TMDb API with status code: " + result.getStatusCode());
                }
            }
        } else {
            logger.warn("The response list is null or empty");
        }

        return movies;
    }



    @Override
    public List<Movie> filterMoviesByReleaseDate(List<Movie> movies, LocalDate today) {
        return movies.stream()
                .filter(movie -> movie.getReleaseDate().isAfter(today) && movie.getReleaseDate().isBefore(today.plusDays(14)))
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

    @Override
    public List<String> assignGenre(List<Integer> genresId) {
        List<String> movieGenres = new ArrayList<>();

        GenreCombert[] genreEnum = GenreCombert.values();
        if (genreEnum != null) {
            for (var genre : genreEnum){
                for(var genreId : genresId ){
                    if(genre.getId() == genreId){
                     movieGenres.add(genre.name());
                    }
            }
        }

    }
        return movieGenres;
    }

    @Override
    public List<Movie> filterMoviesByLenguage(List<Movie> movies) {
        return List.of();
    }
}