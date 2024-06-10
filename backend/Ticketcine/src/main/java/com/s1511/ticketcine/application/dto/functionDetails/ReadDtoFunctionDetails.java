package com.s1511.ticketcine.application.dto.functionDetails;

import com.s1511.ticketcine.application.dto.seat.ResponseDtoSeat;
import java.time.LocalDateTime;
import java.util.List;

public record ReadDtoFunctionDetails(
        String id,
        LocalDateTime schedule,
        String movieId,
        String screenId,
        List<ResponseDtoSeat> seatsList
) {
}
