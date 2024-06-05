package com.s1511.ticketcine.application.dto.seat;

import com.s1511.ticketcine.domain.utils.SeatEnum;

import java.time.LocalDateTime;

public record ReadDtoSeat(
        String id,
        String seatNumber,
        LocalDateTime reservationTime,
        Boolean reserved,
        SeatEnum seatEnum
) {
}
