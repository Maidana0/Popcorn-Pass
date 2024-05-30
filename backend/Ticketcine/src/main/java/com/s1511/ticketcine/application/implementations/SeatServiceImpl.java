package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.domain.entities.User;
import com.s1511.ticketcine.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.s1511.ticketcine.application.dto.seat.SeatDTO;
import com.s1511.ticketcine.application.dto.seat.SeatReservationDTO;
import com.s1511.ticketcine.application.mapper.SeatMapper;
import com.s1511.ticketcine.domain.entities.Seat;
import com.s1511.ticketcine.domain.repository.SeatRepository;
import com.s1511.ticketcine.domain.services.SeatService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class SeatServiceImpl implements SeatService {

    private final SeatRepository seatRepository;
    private final UserRepository userRepository;
    private final SeatMapper seatMapper;

    @Override
    public List<SeatDTO> findAllSeats() {
        List<Seat> seats = seatRepository.findAll();
        return seats.stream()
                .map(seatMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public SeatDTO findSeatById(Long id) {
        Seat seat = seatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Seat not found"));
        return seatMapper.toDTO(seat);
    }

    @Override
    @Transactional
    public Optional<Seat> seatReservation(Long id, SeatReservationDTO seatReservationDTO) {
        Optional<Seat> seatOptional = seatRepository.findById(id);

        if (!seatOptional.isPresent()) {
            return Optional.empty(); // Asiento no encontrado
        }

        Seat seat = seatOptional.get();
        if (!seat.isReserved()) {
            return Optional.empty(); // Asiento no reservado
        }

        Optional<User> userOptional = userRepository.findById(String.valueOf(seatReservationDTO.userId()));

        if (!userOptional.isPresent()) {
            return Optional.empty(); // Usuario no encontrado o no activo
        }

        User user = userOptional.get();
        seat.setCurrentUser(user);
        seat.setAvailability(seatReservationDTO.availability());
        seat.setReserved(false); // Asiento ya no está reservado

        seatRepository.save(seat);
        return Optional.of(seat); // Estado del asiento actualizado exitosamente
    }

}
