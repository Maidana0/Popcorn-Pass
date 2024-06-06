package com.s1511.ticketcine.domain.services;

import com.s1511.ticketcine.application.dto.seat.RequestDtoSeat;
import com.s1511.ticketcine.application.dto.seat.ResponseDtoSeat;
import com.s1511.ticketcine.application.dto.seat.ReturnedSeatsDto;
import org.springframework.stereotype.Service;
import com.s1511.ticketcine.domain.entities.Seat;

import java.util.List;
import java.util.Optional;

@Service
public interface SeatService {

    ResponseDtoSeat findSeatById(String id);
    Seat seatReservation(String userId, String seatId);
    List<Seat> createSeatMatrix(String functionDetailsId);
    Boolean returnSeat(String ticketId, ReturnedSeatsDto returnedSeatsIds);
    void lookForPreviousUser(String ticketId);

    }
