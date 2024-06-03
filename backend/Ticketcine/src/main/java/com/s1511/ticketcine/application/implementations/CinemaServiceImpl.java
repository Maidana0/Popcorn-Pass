package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.cinema.ReadDtoCinema;
import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.ticketcine.application.mapper.CinemaMapper;
import com.s1511.ticketcine.application.mapper.MovieMapper;
import com.s1511.ticketcine.domain.entities.Cinema;
import com.s1511.ticketcine.domain.entities.Movie;
import com.s1511.ticketcine.domain.entities.Screen;
import com.s1511.ticketcine.domain.repository.CinemaRepository;
import com.s1511.ticketcine.domain.repository.FunctionDetailsRepository;
import com.s1511.ticketcine.domain.repository.MovieRepository;
import com.s1511.ticketcine.domain.repository.ScreenRepository;
import com.s1511.ticketcine.domain.services.CinemaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class CinemaServiceImpl implements CinemaService {

    private final CinemaRepository cinemaRepository;
    private final FunctionDetailsRepository functionDetailsRepository;
    private final MovieMapper movieMapper;
    private final MovieRepository movieRepository;
    private final ScreenRepository screenRepository;
    private final CinemaMapper cinemaMapper;

    @Override
    public List<String> getCinemasCityName() {

        List<Cinema> cinemas = cinemaRepository.findAll();
        List<String> cities = new ArrayList<String>();

        for (Cinema cinema : cinemas){
            cities.add(cinema.getCity());
        }

        return cities;
    }

    @Override
    public List<ReadDtoCinema> getCinemaListByCity(String city) {
        return cinemaMapper.ListToReadDtoList(cinemaRepository.findByCityAndActive(city, true));
    }

    @Override
    public List<ReadDtoMovie> getMoviesByCinema(String cinemaId) {
        List<Screen> cinemaScreens = screenRepository.findByCinemaId(cinemaId);
        List<String> allCinemaMoviesId = new ArrayList();
        System.out.println("movies 1;;;;");
        for (Screen Screen : cinemaScreens){
           allCinemaMoviesId.add(functionDetailsRepository.findMovieIdByScreenId(Screen.getId()));

            System.out.println(allCinemaMoviesId+"movieId total");
        }
        System.out.println("movies 2;;;;");
        Set<Movie> uniqueCinemaMovies = new HashSet<>();

        for (String movieId : allCinemaMoviesId) {
            Movie movie = movieRepository.findByIdAndActive(movieId, true).orElse(null);
            if (movie != null) {
                uniqueCinemaMovies.add(movie);
            }
        }
        System.out.println("movies 3;;;;");
        return movieMapper.movieListToReadDtoList(new ArrayList<>(uniqueCinemaMovies));
    }}
