package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.functionDetails.ReadDtoFunctionDetails;
import com.s1511.ticketcine.application.mapper.FunctionDetailsMapper;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
import com.s1511.ticketcine.domain.entities.Screen;
import com.s1511.ticketcine.domain.repository.ScreenRepository;
import com.s1511.ticketcine.domain.services.MovieService;
import com.s1511.ticketcine.domain.services.SeatService;
import jakarta.transaction.Transactional;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import com.s1511.ticketcine.application.mapper.MovieMapper;
import com.s1511.ticketcine.domain.repository.FunctionDetailsRepository;
import com.s1511.ticketcine.domain.repository.MovieRepository;
import com.s1511.ticketcine.domain.services.FunctionDetailsService;

import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class FunctionDetailsServiceImpl implements FunctionDetailsService {

    private final FunctionDetailsRepository functionDetailsRepository;
    private final MovieService movieService;
    private final ScreenRepository screenRepository;
    private final SeatService seatService;
    private final FunctionDetailsMapper functionDetailsMapper;

    @Override
    @Transactional
    @Scheduled(cron = "0 0 0 * * *")
    public void createFunctionsForScreen() {
        var screens = screenRepository.findAll();
        LocalDateTime time = LocalDateTime.now().plusDays(7);
        for (Screen screen : screens) {
            for (int i = 0; i <= 2; i++) {
                FunctionDetails functionDetail = new FunctionDetails();
                functionDetailsRepository.save(functionDetail);
                functionDetail.setScreenId(screen.getId());
                if (i == 2) {
                    functionDetail.setSchedule(time.with(LocalTime.of(18, 0)));
                } else if (i == 1) {
                    functionDetail.setSchedule(time.with(LocalTime.of(21, 0)));
                } else if (i == 0) {
                    functionDetail.setSchedule(time.plusDays(1).with(LocalTime.of(0, 0)));
                }
                functionDetail.setSeatsList(seatService.createSeatMatrix(functionDetail.getId()));
                functionDetail.setMovieId(movieService.getRandomMovieId(i));
                functionDetail.setActive(true);
                functionDetailsRepository.save(functionDetail);
            }
        }
    }


    @Override
    public List<ReadDtoFunctionDetails> getFunctionsDetailsByCinemaIdAndMovieId(String cinemaId, String movieId) {
        var screens = screenRepository.findByCinemaId(cinemaId);
        var functionsDetails = functionDetailsRepository.findByMovieIdAndActive(movieId, true);
        List<FunctionDetails> movieFunctionsDetails = new ArrayList<>();

        for (Screen screen : screens) {

            for (FunctionDetails functionDetail : functionsDetails) {
                if (functionDetail.getScreenId().equals(screen.getId()) && functionDetail.getMovieId().equals(movieId)) {
                    movieFunctionsDetails.add(functionDetail);
                }
            }
        }
        return functionDetailsMapper.functionDetailsListToDtoList(movieFunctionsDetails);
    }

    @Override
    public List<ReadDtoFunctionDetails> getFunctionsDetailsByMovieId(String movieId) {
        return functionDetailsMapper.functionDetailsListToDtoList(functionDetailsRepository.findByMovieIdAndActive(movieId, true));
    }

    @Transactional
    @Scheduled(cron = "1 1 0,18,21 * * *")
    public void outdateFunctionDetails() {
        List<FunctionDetails> allFunctionDetails = functionDetailsRepository.findByActive(true);
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime expirationDay;

        if (now.getHour() >= 0 && now.getHour() < 18) {
            expirationDay = now.minusDays(13).withHour(0).withMinute(1).withSecond(0).withNano(0);
        } else if (now.getHour() >= 18 && now.getHour() < 21) {
            expirationDay = now.minusDays(13).withHour(18).withMinute(1).withSecond(0).withNano(0);
        } else {
            expirationDay = now.minusDays(13).withHour(21).withMinute(1).withSecond(0).withNano(0);
        }

        for (FunctionDetails funtion : allFunctionDetails) {
            if (funtion.getSchedule().isBefore(expirationDay)) {
                funtion.setActive(false);
                functionDetailsRepository.save(funtion);
            }
        }
    }
}


