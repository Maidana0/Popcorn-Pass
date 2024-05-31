package com.s1511.ticketcine.infrastructure.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.s1511.ticketcine.application.dto.seat.SeatDTO;
import com.s1511.ticketcine.application.dto.seat.SeatReservationDTO;
import com.s1511.ticketcine.domain.entities.Seat;
import com.s1511.ticketcine.domain.services.SeatService;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/seat")
public class SeatController {

    private final SeatService seatService;

    @GetMapping("/all")
    public List<SeatDTO> getAllSeats() {
        return seatService.findAllSeats();
    }

    @GetMapping("/{id}")
    public SeatDTO getSeatById(@PathVariable String id) {
        return seatService.findSeatById(id);
    }

    @PostMapping("/{seatId}/reserve")
    public ResponseEntity<?> reserveSeat(@PathVariable String seatId, @RequestBody SeatReservationDTO reservationDTO) {
        // Llama a la función seatReservation del servicio de asientos
        if (seatService.seatReservation(seatId, reservationDTO).isPresent()) {
            return ResponseEntity.ok("Seat reserved successfully");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to reserve seat");
        }
    }

}
