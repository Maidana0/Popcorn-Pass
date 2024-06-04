package com.s1511.ticketcine.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.s1511.ticketcine.domain.entities.Seat;

import java.util.List;
import java.util.Optional;

@Repository
public interface SeatRepository extends JpaRepository<Seat, String> {

    List<Seat> findByFunctionDetailsId(String functionDetails);
    Optional<Seat> findBySeatNumberAndOccupied(String seatNumber, Boolean occupied);


}
