package com.s1511.Ticketcine.domain.services;

import com.s1511.Ticketcine.domain.entities.Seat;

import java.util.List;

public interface SeatService {

    List<Seat> findByUserName(String userName);


}
