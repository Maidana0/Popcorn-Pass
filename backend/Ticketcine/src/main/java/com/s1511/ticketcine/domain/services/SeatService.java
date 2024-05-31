package com.s1511.ticketcine.domain.services;

import com.s1511.ticketcine.application.dto.seat.SeatDTO;
import com.s1511.ticketcine.application.dto.seat.SeatReservationDTO;
import org.springframework.stereotype.Service;
import com.s1511.ticketcine.domain.entities.Seat;

import java.util.List;
import java.util.Optional;

@Service
public interface SeatService {

    List<SeatDTO> findAllSeats();
    SeatDTO findSeatById(String id);
    Optional<Seat> seatReservation(String id, SeatReservationDTO seatReservationDTO);
    List<Seat> createSeatMatrix(String functionDetailsId);
}