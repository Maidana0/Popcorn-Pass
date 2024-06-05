package com.s1511.ticketcine.infrastructure.controllers;

import com.s1511.ticketcine.application.dto.seat.ResponseDtoSeat;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.s1511.ticketcine.domain.services.SeatService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/seat")
public class SeatController {

    private final SeatService seatService;
    @GetMapping("/{id}")
    public ResponseEntity<ResponseDtoSeat> getSeatById(@PathVariable String id) {

        return ResponseEntity.ok(seatService.findSeatById(id));
    }

    @PostMapping("/return/{ticketId}")
    public ResponseEntity<Boolean> returnSeat(@PathVariable String ticketId,
                                              @RequestBody List<String> returnedSeatsIds){
        return ResponseEntity.ok(seatService.returnSeat(ticketId, returnedSeatsIds));
    }

}
