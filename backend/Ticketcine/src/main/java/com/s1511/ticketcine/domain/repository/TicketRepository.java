package com.s1511.ticketcine.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.s1511.ticketcine.domain.entities.Ticket;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, String> {
    List<Ticket> getTicketsByUserIdAndActive(String userId, Boolean active);
    Optional<Ticket> findByUserIdAndMovieName(String userId, String movieName);
}