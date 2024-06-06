package com.s1511.ticketcine.application.dto.seat;

import java.util.List;

public record ReturnedSeatsDto(
        List<String> returnedSeatsIds
) {
}
