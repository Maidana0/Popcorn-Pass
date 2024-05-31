package com.s1511.ticketcine.application.dto.seat;

import com.s1511.ticketcine.domain.entities.Seat;

public record SeatDTO(
        String id,
        String seatNumber,
        Seat.Availability availability) {}
