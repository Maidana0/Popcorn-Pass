package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.functionDetails.ReadDtoFunctionDetails;
import com.s1511.ticketcine.application.mapper.FunctionDetailsMapper;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
import com.s1511.ticketcine.domain.entities.Screen;
import com.s1511.ticketcine.domain.repository.ScreenRepository;
import com.s1511.ticketcine.domain.services.MovieService;
import com.s1511.ticketcine.domain.services.SeatService;
import jakarta.transaction.Transactional;
import org.springframework.cglib.core.Local;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.s1511.ticketcine.application.dto.movie.ReadDtoMovie;
import com.s1511.ticketcine.application.mapper.MovieMapper;
import com.s1511.ticketcine.domain.repository.FunctionDetailsRepository;
import com.s1511.ticketcine.domain.repository.MovieRepository;
import com.s1511.ticketcine.domain.services.FunctionDetailsService;

import lombok.RequiredArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FunctionDetailsServiceImpl implements FunctionDetailsService {

    private final FunctionDetailsRepository functionDetailsRepository;
    private final MovieMapper movieMapper;
    private final MovieRepository movieRepository;
    private final MovieService movieService;
    private final ScreenRepository screenRepository;
    private final SeatService seatService;
    private final FunctionDetailsMapper functionDetailsMapper;

    @Override
    public ReadDtoMovie getMovieById(String idMovie) {
        return movieMapper.movieToReadDto(movieRepository.findByIdAndActive(idMovie,true).orElse(null));
    }

    @Override
    @Transactional
    public void createFunctionsForScreen() {
        var screens = screenRepository.findAll();
        LocalDateTime time = LocalDateTime.now().plusDays(14);
        for (Screen screen: screens) {
            for (int i = 0; i <= 2; i++) {
                FunctionDetails functionDetail = new FunctionDetails();
                functionDetailsRepository.save(functionDetail);
                functionDetail.setScreenId(screen.getId());
                System.out.println("functionDetails ID cuando se crea el fd"+functionDetail.getId());
                if (i == 0) {
                    functionDetail.setSchedule(time.with(LocalTime.of(18,0)));
                } else if (i == 1) {
                    functionDetail.setSchedule(time.with(LocalTime.of(21,0)));
                } else if (i == 2) {
                    functionDetail.setSchedule(time.plusDays(1).with(LocalTime.of(0, 0)));
                }
                functionDetail.setSeatsList(seatService.createSeatMatrix(functionDetail.getId()));
                functionDetail.setMovieId(movieService.getRandomMovieId());
                functionDetail.setActive(true);
                functionDetailsRepository.save(functionDetail);
            }
        }

    }

    @Override
    public List<ReadDtoFunctionDetails> getFunctionsDetailsByCinemaIdAndMovieId(String cinemaId, String movieId) {
    var screens = screenRepository.findByCinemaId(cinemaId);
    var functionsDetails = functionDetailsRepository.findByMovieId(movieId);
    List<FunctionDetails> movieFunctionsDetails = new ArrayList<>();

    for (Screen screen : screens){

        for (FunctionDetails functionDetail : functionsDetails){
            if (functionDetail.getScreenId().equals(screen.getId()) && functionDetail.getMovieId().equals(movieId)) {
        movieFunctionsDetails.add(functionDetail);
            }
        }
    }
        return functionDetailsMapper.functionDetailsListToDtoList(movieFunctionsDetails);
    }

    @Override
    public List<ReadDtoFunctionDetails> getFunctionsDetailsByMovieId(String movieId) {
        return functionDetailsMapper.functionDetailsListToDtoList(functionDetailsRepository.findByMovieId(movieId));
    }

}
