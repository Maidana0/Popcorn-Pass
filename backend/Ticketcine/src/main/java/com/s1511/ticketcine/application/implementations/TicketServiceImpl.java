package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.ticket.ResponseTicketDto;
import com.s1511.ticketcine.application.mapper.TicketMapper;
import com.s1511.ticketcine.domain.services.FunctionDetailsService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.s1511.ticketcine.application.dto.mercadopago.RequestTicketDto;
import com.s1511.ticketcine.domain.entities.*;
import com.s1511.ticketcine.domain.repository.*;
import com.s1511.ticketcine.domain.services.TicketService;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketServiceImpl implements TicketService {
    public final TicketRepository ticketRepository;
    public final FunctionDetailsRepository functionDetailsRepository;
    public final UserRepository userRepository;
    public final ScreenRepository screenRepository;
    public final MovieRepository movieRepository;
    public final SeatRepository seatRepository;
    public final TicketMapper ticketMapper;

    public String createTicket(RequestTicketDto requestDto){
        User user = userRepository.findByIdAndActive(requestDto.userId(), true)
                .orElseThrow(() -> new EntityNotFoundException(
                        "No se puede encontrar el usuario con el id " + requestDto.userId()));

        FunctionDetails functionDetails = functionDetailsRepository.findByIdAndActive(requestDto.functionDetailsId(), true)
                .orElseThrow(() -> new EntityNotFoundException(
                        "No se puede encontrar la función con el id " + requestDto.functionDetailsId()));

        String screenId = functionDetails.getScreenId();
        String movieId = functionDetails.getMovieId();
        LocalDateTime functionDate = functionDetails.getSchedule();

        Screen screen = screenRepository.findByIdAndActive(screenId, true)
                .orElseThrow(() -> new EntityNotFoundException(
                        "No se puede encontrar la sala con el id " + screenId));

        String cinemaName = screen.getCinema().getId();

        Movie movie = movieRepository.findByIdAndActive(movieId, true)
                .orElseThrow(() -> new EntityNotFoundException(
                        "No se puede encontrar la película con el id " + movieId));

        String movieName = movie.getTitle();


        List<Seat> seatEntityList = new ArrayList<>();
        List<String> seatsList = requestDto.seatsIds();
        for (String id : seatsList) {
            Seat seat = seatRepository.findById(id)
                    .orElseThrow(() -> new EntityNotFoundException(
                            "El asiento " + id + " no se encuentra disponible."));
            seatEntityList.add(seat);
        }

        Double value = calculateTicketPrice(requestDto.unitPrice(), requestDto.amountOfSeats());

        Ticket ticket = new Ticket();
        ticket.setUserId(user.getId());
        ticket.setCinemaName(cinemaName);
        ticket.setScreenName(screen.getName());
        ticket.setSeatsIds(seatEntityList);
        ticket.setMovieName(movieName);
        ticket.setValue(value);
        ticket.setFunctionDate(functionDate);
        ticket.setActive(false);

        Ticket savedTicket = ticketRepository.save(null);
        return savedTicket.getId();
    }

    @Override
    public List<ResponseTicketDto> getAllTicketsByUserIdAndActive(String userId, Boolean active) {
        List<Ticket> ticketList = ticketRepository.getTicketsByUserIdAndActive(userId, active);
        List<ResponseTicketDto> ticketListDto = ticketMapper.ticketListToResponseDtoList(ticketList);
        return ticketListDto;
    }

    public ResponseTicketDto getTicketById(String id) {
        var ticket = ticketRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("No se encuentra ticket con el id " + id));
        ResponseTicketDto responseDto = ticketMapper.ticketToResponseDto(ticket);
        return responseDto;
    }
    @Override
    public List<ResponseTicketDto> getAllTicketsByUserId(String userId) {
        List<Ticket> ticketList = ticketRepository.getTicketsByUserId(userId);
        List<ResponseTicketDto> ticketListDto = ticketMapper.ticketListToResponseDtoList(ticketList);
        return ticketListDto;
    }

    private double calculateTicketPrice(double unitPrice, int unitValue){
        return unitPrice * unitValue;
    }
}


