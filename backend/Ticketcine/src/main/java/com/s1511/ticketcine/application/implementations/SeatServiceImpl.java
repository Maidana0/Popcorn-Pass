package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.seat.RequestDtoSeat;
import com.s1511.ticketcine.application.dto.seat.ResponseDtoSeat;
import com.s1511.ticketcine.domain.entities.FunctionDetails;
import com.s1511.ticketcine.domain.entities.Ticket;
import com.s1511.ticketcine.domain.entities.User;
import com.s1511.ticketcine.domain.repository.FunctionDetailsRepository;
import com.s1511.ticketcine.domain.repository.TicketRepository;
import com.s1511.ticketcine.domain.repository.UserRepository;

import com.s1511.ticketcine.domain.services.UserService;
import com.s1511.ticketcine.domain.utils.SeatEnum;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.s1511.ticketcine.application.mapper.SeatMapper;
import com.s1511.ticketcine.domain.entities.Seat;
import com.s1511.ticketcine.domain.repository.SeatRepository;
import com.s1511.ticketcine.domain.services.SeatService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SeatServiceImpl implements SeatService {

    private final SeatRepository seatRepository;
    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;
    private final SeatMapper seatMapper;
    private final FunctionDetailsRepository functionDetailsRepository;
    private final UserService userService;

    @Override//METODO INTERNO PARA CREAR LA SALA.
    public List<Seat> createSeatMatrix(String functionDetailsId) {
        List<Seat> seatsMatrix = new ArrayList();

        for (int i = 0; i < 10; i++) {
            for (int j = 1; j < 6; j++) {
                String letter = "";

                if (i == 0){
                    letter = "A";
                } else if (i == 1){
                    letter = "B";
                } else if (i == 2) {
                    letter = "C";
                } else if (i == 3) {
                    letter = "D";
                } else if (i == 4) {
                    letter = "E";
                } else if (i == 5) {
                    letter = "F";
                } else if (i == 6) {
                    letter = "G";
                } else if (i == 7) {
                    letter = "H";
                } else if (i == 8) {
                    letter = "I";
                } else if (i == 9) {
                    letter = "J";
                }

                var seat = new Seat();
                seat.setSeatNumber(letter+j);
                seat.setSeatEnum(SeatEnum.AVAILABLE);
                seat.setOccupied(false);
                seat.setTicket(null);
                seat.setFunctionDetailsId(functionDetailsId);
                seat.setPreviousUser(null);
                seat.setCurrentUser(null);
                seatRepository.save(seat);

                seatsMatrix.add(seat);
            }
        }
        return seatsMatrix;
    }

    @Override
    public ResponseDtoSeat findSeatById(String id) {
        Seat seat = seatRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Asiento no encontrado"));
        return seatMapper.toDTO(seat);
    }

    @Override
    @Transactional
    public ResponseDtoSeat seatReservation(String userId, String seatId) {

        Seat seat = seatRepository.findById(seatId)
                .orElseThrow(() -> new EntityNotFoundException("Asiento no encontrado"));

        if (seat.getSeatEnum() != SeatEnum.AVAILABLE) {
            throw  new EntityExistsException("Asiento no disponible para reservar"); // Asiento no disponible para reservar
        }

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("Usuario no encontrado"));

        seat.setCurrentUser(user);
        seat.setSeatEnum(SeatEnum.RESERVED);
        seatRepository.save(seat);
        var response = seatMapper.toDTO(seat);
        return response;
    }


    @Override
    public Boolean returnSeat(String ticketId, List<String> returnedSeatsIds) {

        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("El ticket no existe"));
        var userId = ticket.getUserId();
        var seatsIds = ticket.getSeatsIds();

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("El usuario no existe"));



        for (Seat seat:seatsIds) {
            if(returnedSeatsIds.contains(seat.getSeatNumber())){
                seat.setSeatEnum(SeatEnum.AVAILABLE);
                seat.setOccupied(false);
                seat.setPreviousUser(user);
                seat.setCurrentUser(null);
                seatRepository.save(seat);
            }
            throw new EntityNotFoundException("El asiento no esta reservado");

        }

        boolean flag = true;

        for (Seat seat:seatsIds){
            if(seat.getOccupied()){
                flag = false;
                break;
            }

        }

        if(flag){
            ticket.setActive(false);
            ticketRepository.save(ticket);
        }


    return true;
    }

    public void lookForPreviousUser(String ticketId){
        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("El ticket no existe"));

        Double moviePoints = ticket.getValue() / ticket.getSeatsIds().toArray().length;

        for (Seat seat:ticket.getSeatsIds()) {
            if(seat.getPreviousUser()!= null){
               userService.claimMoviePoints(moviePoints, seat.getPreviousUser().getId());
                seat.setPreviousUser(null);
            }
        }
    }
}


