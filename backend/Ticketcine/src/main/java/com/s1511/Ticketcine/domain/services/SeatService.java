package com.s1511.Ticketcine.domain.services;

import com.s1511.Ticketcine.application.dto.SeatDTO;
import com.s1511.Ticketcine.domain.entities.Seat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface SeatService {

    List<SeatDTO> findAllSeats();
    SeatDTO findSeatById(Long id);
//    List<Seat> findByUserName(String userName);
//    List<Seat> findByReserved(boolean reserved);
//    SeatDTO updateSeat(SeatDTO seatDTO);
//    boolean reserveSeat(Long seatId, Long userId);
//    boolean cancelReservation(Long reservationId);

}
