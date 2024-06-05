package com.s1511.ticketcine.domain.services;


import com.s1511.ticketcine.application.dto.cinema.ReadDtoCinema;
import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.ticketcine.domain.entities.Cinema;

import java.util.HashSet;
import java.util.List;

public interface CinemaService {

    HashSet<String> getCinemasCityName();
    List<ReadDtoCinema> getCinemaListByCity(String city);
    List<ReadDtoMovie> getMoviesByCinema(String cinemaId);

}
