package com.s1511.Ticketcine.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.s1511.Ticketcine.domain.entities.Cinema;

public interface CinemaRepository extends JpaRepository <Cinema, String>{
    
}
