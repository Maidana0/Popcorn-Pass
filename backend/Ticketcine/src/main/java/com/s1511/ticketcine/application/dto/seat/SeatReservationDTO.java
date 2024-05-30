package com.s1511.ticketcine.application.dto.seat;

import com.s1511.ticketcine.domain.entities.Seat;

public record SeatReservationDTO(
        Long userId,
        Seat.Availability availability) {

}
