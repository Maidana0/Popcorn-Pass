package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.cinema.ReadDtoCinema;
import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.ticketcine.application.mapper.CinemaMapper;
import com.s1511.ticketcine.application.mapper.MovieMapper;
import com.s1511.ticketcine.domain.entities.Cinema;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
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
    public HashSet<String> getCinemasCityName() {

        List<Cinema> cinemas = cinemaRepository.findAll();
        HashSet<String> cities = new HashSet<>();

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
        for (Screen screen : cinemaScreens){
           var funtionDetails = functionDetailsRepository.findByScreenIdAndActive(screen.getId(),true);
           for (FunctionDetails functionDetail : funtionDetails){
               allCinemaMoviesId.add(functionDetail.getMovieId());
           }
        }
        Set<Movie> uniqueCinemaMovies = new HashSet<>();

        for (String movieId : allCinemaMoviesId) {
            Movie movie = movieRepository.findByIdAndActive(movieId, true).orElse(null);
            if (movie != null) {
                uniqueCinemaMovies.add(movie);
            }
        }
        return movieMapper.movieListToReadDtoList(new ArrayList<>(uniqueCinemaMovies));
    }}
