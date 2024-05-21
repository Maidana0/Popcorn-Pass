package com.s1511.Ticketcine.infrastructure.controllers;

import com.s1511.Ticketcine.application.dto.SeatDTO;
import com.s1511.Ticketcine.domain.services.SeatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/seats")
public class SeatController {

    private final SeatService seatService;

    @GetMapping
    public List<SeatDTO> getAllSeats() {
        return seatService.findAllSeats();
    }

    @GetMapping("/{id}")
    public SeatDTO getSeatById(@PathVariable Long id) {
        return seatService.findSeatById(id);
    }

//    @PutMapping
//    public SeatDTO updateSeat(@RequestBody SeatDTO seatDTO) {
//        return seatService.updateSeat(seatDTO);
//    }
//
//    @PostMapping("/{seatId}/reserve/{userId}")
//    public boolean reserveSeat(@PathVariable Long seatId, @PathVariable Long userId) {
//        return seatService.reserveSeat(seatId, userId);
//    }
//
//    @DeleteMapping("/reservation/{reservationId}")
//    public boolean cancelReservation(@PathVariable Long reservationId) {
//        return seatService.cancelReservation(reservationId);
//    }
}
