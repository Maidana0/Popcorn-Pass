package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.seat.ResponseDtoSeat;
import com.s1511.ticketcine.application.dto.seat.ReturnedSeatsDto;
import com.s1511.ticketcine.domain.entities.Ticket;
import com.s1511.ticketcine.domain.entities.User;
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

@RequiredArgsConstructor
@Service
public class SeatServiceImpl implements SeatService {

    private final SeatRepository seatRepository;
    private final UserRepository userRepository;
    private final TicketRepository ticketRepository;
    private final SeatMapper seatMapper;
    private final UserService userService;

    @Override//METODO INTERNO PARA CREAR LA SALA.
    public List<Seat> createSeatMatrix(String functionDetailsId) {
        List<Seat> seatsMatrix = new ArrayList();

        for (int i = 0; i < 6; i++) {
            for (int j = 1; j < 8; j++) {
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
    public Seat seatReservation(String userId, String seatId) {

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
        return seat;
    }

    @Override
    @Transactional
    public Boolean returnSeat(String ticketId, ReturnedSeatsDto returnedSeatsIds) {

        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("El ticket no existe"));
        var userId = ticket.getUserId();
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("El usuario no existe"));
        var seatsIds = ticket.getSeatsIds();
        List<String> ticketSeats = new ArrayList<>();
        for (Seat seat : seatsIds){
            String ticketSeat = seat.getId();
            ticketSeats.add(ticketSeat);
        }
        List<String> returned = returnedSeatsIds.returnedSeatsIds();

        boolean notPurchased = true;
        for (String returnedId : returned) {
            for (String ticketSeat : ticketSeats) {
                if (returnedId.equals(seatRepository.findById(ticketSeat).orElse(null).getSeatNumber())){
                    Seat seat = seatRepository.findById(ticketSeat)
                            .orElseThrow(() -> new EntityNotFoundException("El asiento no existe"));
                    seat.setSeatEnum(SeatEnum.AVAILABLE);
                    seat.setOccupied(false);
                    seat.setPreviousUser(user);
                    seat.setCurrentUser(null);
                    seatRepository.save(seat);
                    notPurchased = false;
                }
            }
        }

        if (notPurchased) { throw new EntityNotFoundException("El asiento no esta reservado por este usuario"); }

        var actualSeatIds = ticket.getSeatsIds();
        boolean flag = true;
        for (Seat seat : actualSeatIds){
            if (seat.getOccupied()) { flag = false; }
        }

        if (flag) {
            ticket.setActive(false);
            ticketRepository.save(ticket);
        }

    return true;
    }

    public void lookForPreviousUser(String ticketId){
        Ticket ticket = ticketRepository.findById(ticketId)
                .orElseThrow(() -> new EntityNotFoundException("El ticket no existe"));

        Double moviePoints = (ticket.getValue() / ticket.getSeatsIds().toArray().length) * 0.9;

        for (Seat seat:ticket.getSeatsIds()) {
            if(seat.getPreviousUser()!= null){
               userService.claimMoviePoints(moviePoints, seat.getPreviousUser().getId());
               seat.setPreviousUser(null);
               seatRepository.save(seat);
            }
        }
    }
}


