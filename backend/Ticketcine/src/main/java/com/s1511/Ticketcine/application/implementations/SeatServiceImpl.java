package com.s1511.Ticketcine.application.implementations;

import com.s1511.Ticketcine.application.dto.SeatDTO;
import com.s1511.Ticketcine.application.mapper.SeatMapper;
import com.s1511.Ticketcine.domain.entities.Reservation;
import com.s1511.Ticketcine.domain.entities.Seat;
import com.s1511.Ticketcine.domain.repository.ReservationRepository;
import com.s1511.Ticketcine.domain.repository.SeatRepository;
import com.s1511.Ticketcine.domain.services.SeatService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SeatServiceImpl implements SeatService {

    private final SeatRepository seatRepository;

    private final SeatMapper seatMapper;

    @Override
    @Transactional(readOnly = true)
    public List<SeatDTO> findAllSeats() {
        List<Seat> seats = seatRepository.findAll();
        return seats.stream()
                .map(seatMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public SeatDTO findSeatById(Long id) {
        Seat seat = seatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Seat not found"));
        return seatMapper.toDTO(seat);
    }


//    @Override
//    public List<Seat> findByUserName(String userName) {
//        return null;
//    }
//
//
//    @Override
//    public List<Seat> findByReserved(boolean reserved) {
//        return null;
//    }
//
//
//    public SeatDTO updateSeat(SeatDTO seatDTO) {
//        try {
//            Seat seat = seatMapper.toEntity(seatDTO);
//            Seat updatedSeat = seatRepository.save(seat);
//            return seatMapper.toDTO(updatedSeat);
//        } catch (Exception e) {
//            throw new RuntimeException("Error al actualizar el asiento", e);
//        }
//    }
//
//    @Override
//    public boolean reserveSeat(Long seatId, Long userId) {
//        Optional<Seat> optionalSeat = seatRepository.findById(seatId);
//        if (optionalSeat.isPresent()) {
//            Seat seat = optionalSeat.get();
//            if (!seat.isReserved()) {
//                seat.setReserved(true);
//                seatRepository.save(seat);
//                Reservation reservation = new Reservation();
//                reservation.setSeatId(seatId);
//                reservation.setUserId(userId);
//                reservationRepository.save(reservation);
//                return true;
//            }
//        }
//        return false;
//    }
//
//    @Override
//    public boolean cancelReservation(Long reservationId) {
//        Optional<Reservation> optionalReservation = reservationRepository.findById(reservationId);
//        if (optionalReservation.isPresent()) {
//            Reservation reservation = optionalReservation.get();
//            Long seatId = reservation.getSeatId();
//            Optional<Seat> optionalSeat = seatRepository.findById(seatId);
//            if (optionalSeat.isPresent()) {
//                Seat seat = optionalSeat.get();
//                seat.setReserved(false);
//                seatRepository.save(seat);
//                reservationRepository.delete(reservation);
//                return true;
//            }
//        }
//        return false;
//    }

}
