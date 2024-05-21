package com.s1511.Ticketcine.application.dto;

public record SeatDTO(
        Long id,
        String seatNumber,
        boolean reserved) {}
