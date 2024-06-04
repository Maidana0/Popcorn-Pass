package com.s1511.ticketcine.application.implementations;

import com.s1511.ticketcine.application.dto.seat.SeatDTO;
import com.s1511.ticketcine.application.dto.seat.SeatReservationDTO;
import com.s1511.ticketcine.domain.entities.User;
import com.s1511.ticketcine.domain.repository.UserRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.s1511.ticketcine.application.mapper.SeatMapper;
import com.s1511.ticketcine.domain.entities.Seat;
import com.s1511.ticketcine.domain.repository.SeatRepository;
import com.s1511.ticketcine.domain.services.SeatService;

import java.util.ArrayList;
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
    public SeatDTO findSeatById(String id) {
        Seat seat = seatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Seat not found"));
        return seatMapper.toDTO(seat);
    }

    @Override
    @Transactional
    public Optional<Seat> seatReservation(String id, SeatReservationDTO seatReservationDTO) {
        Optional<Seat> seatOptional = seatRepository.findById(id);

        if (!seatOptional.isPresent()) {
            return Optional.empty(); // Asiento no encontrado
        }

        Seat seat = seatOptional.get();
        if (seat.getAvailability() != Seat.Availability.AVAILABLE) {
            return Optional.empty(); // Asiento no disponible para reservar
        }

        Optional<User> userOptional = userRepository.findById(seatReservationDTO.userId());

        if (!userOptional.isPresent()) {
            return Optional.empty(); // Usuario no encontrado o no activo
        }

        User user = userOptional.get();
        seat.setCurrentUser(user);
        seat.setAvailability(Seat.Availability.OCCUPIED); // Actualizar a OCCUPIED al reservar
        seatRepository.save(seat);
        return Optional.of(seat); // Estado del asiento actualizado exitosamente
    }

    @Override
    public List<Seat> createSeatMatrix(String functionDetailsId) {
        List<Seat> seatsMatrix = new ArrayList();
        for (int i = 0; i < 10; i++) {
            for (int j = 1; j < 6; j++) {
                String letter = "";

                if (i == 0){
                    letter = "A";
                } else if (i == 1){
                    letter = "B";
                } else if (i == 2) {
                    letter = "C";
                } else if (i == 3) {
                    letter = "D";
                } else if (i == 4) {
                    letter = "E";
                } else if (i == 5) {
                    letter = "F";
                } else if (i == 6) {
                    letter = "G";
                } else if (i == 7) {
                    letter = "H";
                } else if (i == 8) {
                    letter = "I";
                } else if (i == 9) {
                    letter = "J";
                }

                var seat = new Seat();
                seat.setSeatNumber(letter+i);
                seat.setAvailability(Seat.Availability.AVAILABLE);
                seat.setReserved(false);
                seat.setTicket(null);
                seat.setFunctionDetailsId(functionDetailsId);
                seat.setPreviousUser(null);
                seat.setCurrentUser(null);
                seatRepository.save(seat);

                seatsMatrix.add(seat);
            }
        }
        return seatsMatrix;
    }
}
