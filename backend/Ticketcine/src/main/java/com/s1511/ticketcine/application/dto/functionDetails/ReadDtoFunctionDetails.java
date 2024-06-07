package com.s1511.ticketcine.application.dto.functionDetails;

import com.s1511.ticketcine.application.dto.seat.ReadDtoSeat;

import java.time.LocalDateTime;
import java.util.List;

public record ReadDtoFunctionDetails(
        LocalDateTime schedule,
        String movieId,
        String screenId,
        List<ReadDtoSeat> seatsList
) {
}
