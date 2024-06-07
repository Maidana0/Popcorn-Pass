package com.s1511.ticketcine.application.implementations;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
import com.s1511.ticketcine.domain.repository.MovieRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.s1511.ticketcine.application.dto.screen.CreateDtoScreen;
import com.s1511.ticketcine.application.dto.screen.ReadDtoScreen;
import com.s1511.ticketcine.application.dto.screen.UpdateDtoScreen;
import com.s1511.ticketcine.application.mapper.ScreenMapper;
import com.s1511.ticketcine.application.mapper.SeatMapper;
import com.s1511.ticketcine.domain.entities.Screen;
import com.s1511.ticketcine.domain.repository.FunctionDetailsRepository;
import com.s1511.ticketcine.domain.repository.ScreenRepository;
import com.s1511.ticketcine.domain.repository.SeatRepository;
import com.s1511.ticketcine.domain.services.ScreenService;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ScreenServiceImpl implements ScreenService {

    private ScreenRepository screenRepository;
    private ScreenMapper screenMapper;
    private SeatRepository seatRepository;
    private SeatMapper seatMapper;
    private FunctionDetailsRepository fdr;
    private MovieRepository movieRepository;

    @Override //todo. ver si es necesario. FACU DICE QUE SÍ PORQUE CAMBIA FUNCTION DETAILS!!!
    public ReadDtoScreen updateScreen(String id, UpdateDtoScreen updateDtoScreen) {
        Screen screen = screenRepository.findById(id).orElseThrow(() -> new RuntimeException("Screen not found"));
        screen.setName(updateDtoScreen.getName());
        //screen.setSeat(screenMapper.seatDTOToSeat(updateDtoScreen.getSeat()));
        screen.setActive(updateDtoScreen.getActive());
        Screen updatedScreen = screenRepository.save(screen);
        return screenMapper.screenToReadDto(updatedScreen);
    }

    @Override //todo. ver si es necesario.
    public void deleteScreen(String id) {
        if (!screenRepository.existsById(id)) {
            throw new RuntimeException("Screen not found");
        }
        screenRepository.deleteById(id);
    }

    @Override //TODO. PUEDE SERVIR PARA FILTRO 2D Y 3D.
    public List<ReadDtoScreen> selectTypeScreen(String idMovie, String typeScreen, String idCinema) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'selectTypeScreen'");
    }

    @Override // TODO.  DUPLICADO? VER CINEMASERVICE. CAPAZ ESTÁ EN USO.
    public List<ReadDtoScreen> selectMovieByCine(String idCinema) {
        List<Screen> screens = screenRepository.findByCinemaId(idCinema);

        return screenMapper.screenListToReadDtoList(screens);
    }

    @Override
    public List<ReadDtoScreen> selectScreenByCinemaIdAndMovieId(String cinemaId, String movieId) {
        
        List<Screen> screens = fdr.findByCinemaIdAndMovieIdAndActive(cinemaId, movieId,true);
        return screenMapper.screenListToReadDtoList(screens);
    }

    @Override
    public List<FunctionDetails> findMoviesNamesByCinemaId(String cinemaId) {
        var cinemaFunctionDetails = screenRepository.findFunctionDetailsByCinemaId(cinemaId);
        List<String> cinemaMovieNames = movieRepository.findTitleByIdAndActive(cinemaFunctionDetails.iterator().next().getMovieId(),true);
        return null;
    }


}

