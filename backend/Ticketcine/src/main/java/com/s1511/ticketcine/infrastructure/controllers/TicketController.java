package com.s1511.ticketcine.infrastructure.controllers;

import com.s1511.ticketcine.application.dto.mercadopago.RequestTicketDto;
import com.s1511.ticketcine.application.dto.ticket.ResponseTicketDto;
import com.s1511.ticketcine.domain.services.TicketService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/ticket")
@RestController
@RequiredArgsConstructor
@SecurityRequirement(name = "Bearer Authentication")
public class TicketController {
    public final TicketService ticketService;

    @GetMapping("/u/{userId}/{active}")
    public ResponseEntity<List<ResponseTicketDto>> getAllTicketsByUserIdAndActive (@PathVariable String userId, @PathVariable Boolean active) {
        return ResponseEntity.ok(ticketService.getAllTicketsByUserIdAndActive(userId, active));
    }
    @GetMapping("/u/{userId}")
    public ResponseEntity<List<ResponseTicketDto>> getAllTicketsByUserId (@PathVariable String userId) {
        return ResponseEntity.ok(ticketService.getAllTicketsByUserId(userId));
    }
    @GetMapping("/{id}")
    public ResponseEntity<ResponseTicketDto> getTicketById (@PathVariable String id) {
        return ResponseEntity.ok(ticketService.getTicketById(id));
    }

    @PostMapping("/moviePoints/{moviePoints}")
    public ResponseEntity<ResponseTicketDto> buyTicketWithMoviePoints (@PathVariable double moviePoints,
                                                       @RequestBody @Valid RequestTicketDto requestTicketDto){
        return ResponseEntity.ok(ticketService.buyTicketWithMoviePoints(moviePoints, requestTicketDto));
    }
}
