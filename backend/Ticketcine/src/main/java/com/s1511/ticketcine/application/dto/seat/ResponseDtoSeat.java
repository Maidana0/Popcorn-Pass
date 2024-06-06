package com.s1511.ticketcine.application.dto.seat;

import com.s1511.ticketcine.domain.entities.Ticket;
import com.s1511.ticketcine.domain.entities.User;
import com.s1511.ticketcine.domain.utils.SeatEnum;

import java.time.LocalDateTime;

public record ResponseDtoSeat(
        String id,
        String seatNumber,
        LocalDateTime reservationTime,
        Boolean occupied,
        String functionDetailsId,
        Ticket ticket,
        User currentUser,
        SeatEnum seatEnum) {
}
